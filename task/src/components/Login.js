import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logInUser } from "./Slice/authSlice";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setFormField = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let payload = { ...userData };
      let response = await dispatch(logInUser(payload)).unwrap();
      const foundUser = response.data.find(
        (user) =>
          user.username === userData.username &&
          user.password === userData.password
      );
      if (foundUser) {
        sessionStorage.setItem("user", JSON.stringify(foundUser));
        navigate("../dashboard");
        toast.success("Login successful!");
      } else {
        toast.error("Invalid username or password");
      }
      console.log("respond", foundUser);
    } catch (error) {
      toast.error("Something Went TO Wrong!!!");
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className="max-w-lg mx-auto flex items-center justify-center h-full max-h-[400px] w-full flex-wrap bg-white border border-[#E2E8F0] rounded-xl shadow-lg ">
        <form className="w-full space-y-5 p-5">
          <h1 className="text-4xl text-[#1E293B] font-bold text-center pb-5">
            Login
          </h1>
          <div>
            <label
              htmlFor=""
              className="block text-sm text-[#1E293B] font-bold pb-1"
            >
              Email or Phone
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) => {
                setFormField("email", e.target.value);
              }}
              className="flex items-center w-full bg-transparent p-3.5 py-[13px] outline-none border border-[#E2E8F0] rounded-xl placeholder:text-[#94A3B8] placeholder:text-base"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm text-[#1E293B] font-bold pb-1"
            >
              Password
            </label>
            <input
              type="Password"
              name="Password"
              value={userData.password}
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
            onClick={handleSubmit}
            className="w-full block bg-[#C8EE44] text-[#1E293B] border-[#C8EE44] border hover:bg-[#78970D] hover:text-white hover:border-[#78970D] px-5 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold transition-all duration-300 rounded-[10px] w-ful uppercase leading-7 "
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
