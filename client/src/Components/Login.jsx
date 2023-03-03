import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [skey, setskey] = useState("");
  const [institutename, setinstitutename] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className=" flex justify-center text-3xl font-bold mb-4">Login</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Login as:
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="user"
                  checked={userType === "user"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <span className="ml-2">User</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="faculty"
                  checked={userType === "faculty"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <span className="ml-2">Faculty</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="flex justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
