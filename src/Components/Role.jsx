import React from "react";
import "../App.css";
import Login from "./Login";

const Role = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-3xl">Role</div>
        <div className="text-2xl font-bold text-gray-900 mt-2 text-center">
          Login as a
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Your Role
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select your Role</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          {/* <div>
                    <label className=' text-sm font-bold text-gray-600 block'>Password</label>
                    <input className='w-full p-2 border border-gray-300 rounded-mt-1'/>
                </div> */}
        </form>
      </div>
    </div>
  );
};

export default Role;
