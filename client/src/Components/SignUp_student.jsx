import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">Sign Up</div>
        {/* <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
          anothertext
        </div> */}
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className=" text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              required={true}
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className=" text-sm font-bold text-gray-600 block">
              Confirm Password
            </label>
            <input
              required={true}
              type="password"
              name="confirmpassword"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className=" flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-500">Remember me</label>
            </div>
            <div>
              <a href="" className="font-medium text-blue-500 text-sm">
                {" "}
                Forgot Password
              </a>
            </div>
          </div>

          <div>
            <button className="w-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-800 rounded-md text-sm">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
