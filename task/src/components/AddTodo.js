import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="max-w-lg  mx-auto flex items-center justify-center w-full flex-wrap bg-white border border-[#E2E8F0] rounded-xl shadow-lg ">
          <form className="w-full space-y-5 p-5">
            <h1 className="text-4xl text-[#1E293B] font-bold text-center pb-5">
              Add Todo
            </h1>
            <div>
              <label
                htmlFor=""
                className="block text-sm text-[#1E293B] font-bold pb-1"
              >
                Title
              </label>
              <input
                type="text"
                className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
                placeholder="Enter Title"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm text-[#1E293B] font-bold pb-1"
              >
                Description
              </label>
              <textarea
                type="text"
                className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
                placeholder="Enter Description"
                required
              />
            </div>
            <button
              type="submit"
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
