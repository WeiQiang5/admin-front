import { HttpStatus } from "@/enum/http.enum";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import { ElMessage, ElMessageBox } from "element-plus";

// 返回值
interface Result<T> {
  code: number;
  result: T;
  msg: string;
}

class Request {
  service: AxiosInstance;
  baseConfig: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_BASE_PATH,
    timeout: 10000,
    withCredentials: true,
  };
  constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(Object.assign(this.baseConfig, config));

    // 设置请求拦截器
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // todo 后面这里使用pinia替换
        const token = localStorage.getItem("token") ?? "";
        // 防止AxiosRequestConfig报错
        const headers = (config.headers as AxiosRequestHeaders) || {};

        // 添加Authorization头
        headers["Authorization"] = `Bearer ${token}`;

        // 直接返回更新后的config对象
        return {
          ...config,
          headers: headers,
        };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // 设置响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse<Result<any>, any>): any => {
        const { data } = response;
        // 登录过期，想要重定向至登录页面
        if (data.code === HttpStatus.UNAUTHORIZED) {
          ElMessageBox.alert("登录过期", "您好，登录已过期，请重新登录", {
            confirmButtonText: "登录",
            type: "warning",
          }).then(() => {
            // todo 这里后期使用pinia完善
            localStorage.setItem("token", "");
            location.href = "/";
          });
          return Promise.reject("登录过期");
        }
        if (data.code && data.code !== HttpStatus.OK) {
          ElMessage.error(data.msg);
          return Promise.reject(data.msg);
        }
        return data;
      },
      (error: AxiosError) => {
        const { response } = error;
        if (response) {
          this.handleCode(response.status);
        }
      }
    );
  }
  //   处理浏览器的状态报错
  public handleCode(code: HttpStatus): void {
    let message = "";
    switch (code) {
      case 401:
        message = "登陆失败,请重新登录";
        break;
      case 500:
        message = "请求异常,请联系管理员";
        break;
      default:
        message = "请求失败";
        break;
    }
    ElMessage.error(message);
  }

  get<T>(url: string, config: AxiosRequestConfig<T>) {
    return this.service.get(url, config);
  }
  post<T>(url: string, config: AxiosRequestConfig<T>) {
    return this.service.post(url, config.data, config);
  }
  put<T>(url: string, config: AxiosRequestConfig<T>) {
    return this.service.put(url, config.data, config);
  }
  delete<T>(url: string, config: AxiosRequestConfig<T>) {
    return this.service.get(url, config);
  }
}

export default new Request({});
