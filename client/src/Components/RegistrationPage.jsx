import React, { useState } from "react";
import classNames from "classnames";

const RegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">
              {isLogin ? "Log in" : "Register"}
            </h1>
            <button
              className="text-sm font-medium text-blue-500 hover:text-blue-600 focus:outline-none"
              onClick={toggleForm}
            >
              {isLogin ? "Create an account" : "Log in"}
            </button>
          </div>
          <form className="mt-6">
            {!isLogin && (
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <button
              className={classNames(
                "w-full px-4 py-2 text-white rounded focus:outline-none",
                isLogin
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-500 hover:bg-green-600"
              )}
              type="submit"
            >
              {isLogin ? "Log in" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
