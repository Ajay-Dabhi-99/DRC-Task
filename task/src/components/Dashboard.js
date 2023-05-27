import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment/moment";

function Dashboard() {
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="text-xl font-bold text-[#1E293B] bg-[#C8EE44] text-center p-5">
        Welcome To Your Todos
      </h3>
      <div className="flex justify-center items-center space-x-3 my-5">
        <button
          className="capitalize text-lg font-medium px-3 py-2 bg-blue-600 text-white rounded-md"
        >
          Add New Todo
        </button>
        <button
          className="capitalize flex justify-end text-lg font-medium px-3 py-2 bg-red-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
      <div className="w-full flex flex-wrap px-5">        
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="items-center justify-center w-full flex-wrap bg-white border border-[#E2E8F0] rounded-md shadow-lg p-5 space-y-2">
              <h4 className="text-lg font-semibold text-[#1e293b]">
                {/* {todo.title} */}
              </h4>
              <p className="text-sm font-semibold text-[#878c93]">
                {/* {todo.description} */}
              </p>
              <span className="text-[#3a3a3b] text-sm inline-block">
                {/* {moment(todo.date).format('YYYY-MM-DD , h:mm:ss A')} */}
              </span>
              <div className="flex justify-end items-center space-x-3">
                <button className="capitalize text-xs font-medium px-2 py-2 bg-blue-600 text-white rounded-sm">
                  edit
                </button>
                <button
                  className="capitalize text-xs font-medium px-2 py-2 bg-red-600 text-white rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

      </div>
    </>
  );
}

export default Dashboard;
