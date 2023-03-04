import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:5000/";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [number, setnumber] = useState("");
  const [skey, setskey] = useState("");
  const [institutename, setinstitutename] = useState("");

  const history = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    userType !== "faculty"
      ? await axios
          .post(`${URL}auth/student/signup`, {
            name,
            email,
            password,
            institute: institutename,
            mobNo: number,
          })
          .then((response) => {
            console.log("student data", response.data);
            return response.data;
          })
          .catch((error) => {
            console.error(error);
            throw error;
          })
      : await axios
          .post(`${URL}staff/signup`, {
            name,
            email,
            password,
            institute: institutename,
            mobNo: number,
            secretkey: skey,
          })
          .then((response) => {
            console.log("faculty data", response.data);
            return response.data;
          })
          .catch((error) => {
            console.error(error);
            throw error;
          });

          history('/login')

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className=" flex justify-center text-3xl font-bold mb-4">
          Register
        </h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Register as:
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
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              Contact Number
            </label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="text"
              value={number}
              onChange={(e) => {setnumber(e.target.value)}}
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
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Institute Name
            </label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="text"
              value={institutename}
              onChange={(e) => setinstitutename(e.target.value)}
              required
            />
          </div>

          {userType === "faculty" ? (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                SecretKey
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full"
                type="password"
                value={skey}
                onChange={(e) => setskey(e.target.value)}
                required
              />
            </div>
          ) : (
            <></>
          )}
          <div className="flex justify-center">
            <button
              className="flex justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
