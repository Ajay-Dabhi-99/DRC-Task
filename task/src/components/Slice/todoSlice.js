import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  addNewTodo,
  deleteTodo,
  fetchTodos,
} from "../../redux/services/todoServices";

const getDefaultUser = () => {
  let user = sessionStorage.getItem("user");
  if (user && user !== "undefined") {
    return JSON.parse(user);
  } else {
    return null;
  }
};

const initialState = {
  // addtodos: [],
};

// fetch Todo
export const fetchTodo = createAsyncThunk("todo/fetchTodo", async (id) => {
  return await fetchTodos(id);
});

// create Todo
export const addTodo = createAsyncThunk("addtodo/addTodo", async (payload) => {
  return await addNewTodo(payload);
});

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
