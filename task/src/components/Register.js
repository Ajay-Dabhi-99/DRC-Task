import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logInUser, registerUser } from "./Slice/todoSlice";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setFormField = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  //   Register User
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const payload = { ...user };
      let findUser = await dispatch(logInUser()).unwrap();
      const foundUser = findUser.data.find(
        (users) => users.email === user.email
      );
      if (!foundUser) {
        const response = await dispatch(registerUser(payload)).unwrap();
        if (response) {
          navigate("../login");
          toast.success("Register successful!");
        } else {
          toast.warn("User Already Register!!");
        }
      } else {
        toast.warn("User Already Register!!");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className="max-w-lg mx-auto flex items-center justify-center h-auto w-full flex-wrap bg-white border border-[#E2E8F0] rounded-xl shadow-lg ">
        <form className="w-full space-y-5 p-5">
          <h1 className="text-4xl text-[#1E293B] font-bold text-center pb-5">
            Register
          </h1>
          <div>
            <label className="block text-sm text-[#1E293B] font-bold pb-1">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              value={user.name}
              onChange={(e) => {
                setFormField("name", e.target.value);
              }}
              className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#1E293B] font-bold pb-1">
              Email or Phone
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => {
                setFormField("email", e.target.value);
              }}
              className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#1E293B] font-bold pb-1">
              Password
            </label>
            <input
              type="Password"
              name="Password"
              value={user.password}
              onChange={(e) => {
                setFormField("password", e.target.value);
              }}
              placeholder="Enter your password"
              className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleRegister}
            className="w-full block bg-[#C8EE44] text-[#1E293B] border-[#C8EE44] border hover:bg-[#78970D] hover:text-white hover:border-[#78970D] px-5 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold transition-all duration-300 rounded-[10px] w-ful uppercase leading-7 "
          >
            Register
          </button>
          <Link
            to={"/login"}
            className="flex justify-end text-sm font-medium text-[#1E293B]"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
