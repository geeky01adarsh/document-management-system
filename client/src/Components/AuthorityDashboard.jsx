import React from "react";
import logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import { Button } from "react-scroll";
import { staffName } from "../App";

const AuthorityDashboard = () => {
  return (
    <>
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[100px]">
            <div className="flex-shrink-0">
              <img className="h-12 w-44" src={logo} alt="Logo" />
            </div>
            <staffName.Consumer>
              {(sname) => {
                return (
                  <h1 className="hidden md:flex items-center space-x-8 text-2xl font-bold text-black-full">
                    {sname}
                  </h1>
                );
              }}
            </staffName.Consumer>
          </nav>
        </div>
      </div>

      {/* Year  */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Academic Year</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2A9D8F] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              First Year
            </h2>
          </div>
          <div className="bg-[#f94449] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              Second Year
            </h2>
          </div>
          <div className="bg-[#F4A261] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              Third Year
            </h2>
          </div>
          <div className="bg-blue-600 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              Fourth Year
            </h2>
          </div>
        </div>
      </div>

      {/* Branch  */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Department</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2A9D8F] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">CSE</h2>
          </div>
          <div className="bg-[#f94449] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">IT</h2>
          </div>
          <div className="bg-blue-600 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">ECE</h2>
          </div>
          <div className="bg-[#F4A261] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              MECHANICAL
            </h2>
          </div>
          <div className="bg-[#2A9D8F] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">CME</h2>
          </div>
          <div className="bg-[#F4A261] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">CIVIL</h2>
          </div>
        </div>
        <div className="flex justify-center m-10">
          <button
            className="flex justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Find Records
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthorityDashboard;
