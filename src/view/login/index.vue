<template>
  <div
    class="bg-[url('/src/assets/image/login_background.jpg')] w-full h-full relative m-0 p-0 bg-cover"
  >
    <div
      class="absolute top-[3vh] left-[2vw] w-[96vw] h-[94vh] rounded-[10px] flex justify-evenly items-center bg-[#fff]/80"
    >
      <div
        class="w-[420px] bg-white p-[40px] rounded-[10px] shadow-[2px_3px_7px_rgba(0,0,0,0.2)]"
      >
        <div class="text-[40px] text-center m-[20px]">nest-vue-Admin</div>
        <el-form
          ref="formRef"
          :model="loginForm"
          :rules="rules"
          label-width="0"
        >
          <el-form-item prop="username">
            <el-input
              placeholder="请输入账号"
              v-model="loginForm.username"
              suffix-icon="UserFilled"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
              suffix-icon="Lock"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <div class="w-full flex justify-center mt-[10px]">
              <el-button type="primary" @click="submitForm(formRef)"
                >登录</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div
        class="bg-[url('/src/assets/image/login_left.svg')] bg-cover w-[40%] h-[60%] float-right"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { Login } from "@/interface/user";
import { login } from "@/api/login";
import { HttpStatus } from "@/enum/http.enum";
// 实例
const formRef = ref<FormInstance>();
// 表单数据
const loginForm = reactive<Login>({
  username: "",
  password: "",
});
// 验证
const rules = reactive<FormRules<Login>>({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
// 提交
const submitForm = (formEl: FormInstance | undefined) => {
  console.log(formEl);
  if (!formEl) return;
  console.log(111);

  formEl.validate(async (valid) => {
    if (valid) {
      console.log("submit!");
      const res = await login(loginForm);
      if (res.code === HttpStatus.OK) {
        ElMessage.success("登录成功");
      }
      console.log(res);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<style scoped lang="scss"></style>
