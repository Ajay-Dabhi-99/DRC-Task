import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addTodo } from "./Slice/todoSlice";

const AddTodo = () => {
  const [addTodos, setAddTodos] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user");
  const userId = JSON.parse(user);

  const setFormField = (field, value) => {
    setAddTodos({ ...addTodos, [field]: value });
  };

  // Add Todo
  const handelAddTodo = async (e) => {
    const payload = { ...addTodos, date: new Date(), userId: userId.id };
    if (addTodos.title && addTodos.description !== "") {
      try {
        const response = await dispatch(addTodo(payload)).unwrap();
        console.log(response.data);
        if (response.data !== "") {
          navigate("../dashboard");
          toast.success("Todo Add successful!");
        } else {
          toast.warn("Todo Not Add!");
        }
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.warn("Title & Description Required");
    }
  };

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="max-w-lg  mx-auto flex items-center justify-center w-full flex-wrap bg-white border border-[#E2E8F0] rounded-xl shadow-lg ">
          <form className="w-full space-y-5 p-5">
            <h1 className="text-4xl text-[#1E293B] font-bold text-center pb-5">
              Add Todo
            </h1>
            <div>
              <label className="block text-sm text-[#1E293B] font-bold pb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={addTodos.title}
                onChange={(e) => {
                  setFormField("title", e.target.value);
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
                value={addTodos.description}
                onChange={(e) => {
                  setFormField("description", e.target.value);
                }}
                className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
                placeholder="Enter Description"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => handelAddTodo()}
              className="w-full block bg-[#C8EE44] text-[#1E293B] border-[#C8EE44] border hover:bg-[#78970D] hover:text-white hover:border-[#78970D] px-5 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold transition-all duration-300 rounded-[10px] w-ful uppercase leading-7 "
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
