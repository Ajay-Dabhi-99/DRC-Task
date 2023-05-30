import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  LOGIN,
  REGISTER,
  UPDATE_TODO,
} from "../../api/constApi";
import { apiInstance } from "./axiosApi";

// logo
export const logIn = () => {
  return apiInstance.get(LOGIN);
};

// Register
export const RegisterUser = (payload) => {
  return apiInstance.post(REGISTER, payload);
};

// fetch Todo
export const fetchTodos = (id) => {
  return apiInstance.get(`${FETCH_TODO}${id}`);
};

// add Todo
export const addNewTodo = (payload) => {
  return apiInstance.post(ADD_TODO, payload);
};

// Get Todo
export const getTodo = (id) => {
  return apiInstance.get(`${UPDATE_TODO}${id}`);
};

// update Todo
export const updateTodo = (id, payload) => {
  return apiInstance.patch(`${UPDATE_TODO}${id}`, payload);
};

// Delete Todo
export const deleteTodo = (id) => {
  return apiInstance.delete(`${DELETE_TODO}${id}`);
};
