import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, updateTodos } from "./Slice/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../api/baseUrl";
import { UPDATE_TODO } from "../api/constApi";
import axios from "axios";

function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user");
  const userId = JSON.parse(user);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    date: new Date(),
    id: id,
    userId:userId.id
  });
  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      const payload = { ...todo };
      const response = await dispatch(getTodos(id, payload)).unwrap();
      setTodo({
        ...todo,
        title: response.data.title,
        description: response.data.description,
        date: new Date(),
        id: id,
        userId:userId.id 
      });
    };
  }, []);

  //   update Todo
  const newUpdateTodo = async () => {
    const payload = { ...todo };
    console.log("pay", payload);
    console.log("compo id", id);
    console.log("compo payload", payload);
    const response = await dispatch(updateTodos({id,payload})).unwrap();
    console.log("response", response.data);
    navigate("/dashboard")
  };

  // const newUpdateTodo = async () => {
  //   const payload = { ...todo };
  //   console.log("payload", payload);
  //   const response = await axios.put(`${baseUrl}${UPDATE_TODO}${id}`, payload);
  //   console.log(response);
  //   navigate("/dashboard")
  // };

  return (
    <div className="flex items-center h-screen">
      <div className="max-w-lg  mx-auto flex items-center justify-center w-full flex-wrap bg-white border border-[#E2E8F0] rounded-xl shadow-lg ">
        <form className="w-full space-y-5 p-5">
          <h1 className="text-4xl text-[#1E293B] font-bold text-center pb-5">
            Update Todo
          </h1>
          <div>
            <label className="block text-sm text-[#1E293B] font-bold pb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={(e) => {
                setTodo({ ...todo, title: e.target.value });
              }}
              className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
              placeholder="Enter Title"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#1E293B] font-bold pb-1">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={todo.description}
              onChange={(e) => {
                setTodo({ ...todo, description: e.target.value });
              }}
              className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
              placeholder="Enter Description"
              required
            />
          </div>
          <button
            type="button"
            onClick={() => newUpdateTodo()}
            className="w-full block bg-[#C8EE44] text-[#1E293B] border-[#C8EE44] border hover:bg-[#78970D] hover:text-white hover:border-[#78970D] px-5 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold transition-all duration-300 rounded-[10px] w-ful uppercase leading-7 "
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodo;
