import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  RegisterUser,
  addNewTodo,
  deleteTodo,
  fetchTodos,
  getTodo,
  logIn,
  updateTodo,
} from "../../redux/services/todoServices";

const initialState = {
  // addtodos: [],
};

// login user
export const logInUser = createAsyncThunk("auth/login", async () => {
  return await logIn();
});

// Register user
export const registerUser = createAsyncThunk("auth/login", async (payload) => {
  return await RegisterUser(payload);
});

// fetch Todo
export const fetchTodo = createAsyncThunk("todo/fetchTodo", async (id) => {
  return await fetchTodos(id);
});

// create Todo
export const addTodo = createAsyncThunk("addtodo/addTodo", async (payload) => {
  return await addNewTodo(payload);
});

// Get Todo
export const getTodos = createAsyncThunk("update/todo", async (id) => {
  return await getTodo(id);
});

// update Todo
export const updateTodos = createAsyncThunk(
  "update/todo",
  async ({ id, payload }) => {
    return await updateTodo(id, payload);
  }
);

// Delete Todo
export const deleteTodos = createAsyncThunk("delete/todo", async (id) => {
  return await deleteTodo(id);
});

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.Todos = action?.payload?.data;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.addTodos = action?.payload?.data;
    });
  },
});
export default todoSlice.reducer;

export const selectTodo = (state) => state.todo.Todos;
export const selectaddTodo = (state) => state.todo.addTodos;

export const useTodo = () => {
  const Todos = useSelector(selectTodo);
  return useMemo(() => Todos, [Todos]);
};
export const useAddTodo = () => {
  const addTodos = useSelector(selectaddTodo);
  return useMemo(() => addTodos, [addTodos]);
};
