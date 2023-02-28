import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-lg w-full mx-auto">
        <div className="text-center font-medium text-3xl text-blue-900">
          Authority Dashboard
        </div>
        {/* <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
          anothertext
        </div> */}
      </div>
      <div className=" max-w-md w-full mx-auto mt-9 bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6">
          <div className="text-md font-bold text-gray-700 flex justify-center text-2xl">
            Fill Student Details{" "}
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Student Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Student Enrollment Number
            </label>
            <input
              type="text"
              name="enrollname"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Student Email
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Student College Name
            </label>
            <input
              type="text"
              name="collegename"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className=" text-sm font-bold text-gray-600 block">
              Year
            </label>
            <input
              required={true}
              type="text"
              name="year"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>
          <div>
            <label className=" text-sm font-bold text-gray-600 block">
              Department
            </label>
            <input
              required={true}
              type="text"
              name="department"
              className="w-full p-2 border border-gray-300 rounded-mt-1"
            />
          </div>

          <div>
            <button className="w-full py-2 px-4 bg-cyan-600 text-white hover:bg-cyan-800 rounded-md text-sm">
              Find Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
