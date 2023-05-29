import { ADD_TODO, DELETE_TODO, FETCH_TODO } from "../../api/constApi";
import { apiInstance } from "./axiosApi";

// fetch Todo
export const fetchTodos = (id) => {
  return apiInstance.get(`${FETCH_TODO}${id}`);
};

// add Todo
export const addNewTodo = (payload) => {
  return apiInstance.post(ADD_TODO, payload);
};

// Delete Todo
export const deleteTodo = (id) => {
  return apiInstance.delete(`${DELETE_TODO}${id}`);
};
