import { LOGIN } from "../../api/constApi";
import {apiInstance} from "./axiosApi"

export const logIn = (payload) => {
  return apiInstance.get(LOGIN, payload);

};
