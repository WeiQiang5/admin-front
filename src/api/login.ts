import { Login } from "@/interface/auth";
import request from "../utils/request";

export function login(login: Login) {
  return request.post<Login>("/auth/login", {
    data: login,
  });
}
