import React, { useHistory } from "react";
import "../App.css";
import logo from "../images/logo.png";
import StudentImage from "../images/StudentImage.jpeg";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { studentData } from "../App";
import Logout from "./Logout";
import RequestPopUp from "./RequestPopUp";
import Link from "react";
import UploadRecords from "./UploadRecords";

const StudentDashboard = () => {
  // const history = useHistory();
  const history = useNavigate();
  const [student, setStudent] = useContext(studentData);

  console.log("dashboard", student);

  const studentInfo = {
    name: "Adarsh Navneet Sinha",
    studentId: "0818CS201008",
    major: "Computer Science",
    CGPA: "10",
    graduationYear: "2024",
    advisor: "Jeetu Bhaiya",
  };

  return (
    <>
      {/* navbar  */}
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[100px]">
            <div className="flex-shrink-0">
              <img className="h-12 w-44" src={logo} alt="Logo" />
            </div>
            <div>
              <div className="hidden md:flex items-center space-x-8 text-2xl  font-bold text-black-full">
                {student?.name}
              </div>
              <div className="hidden md:flex items-center space-x-8 text-2xl text-black-full">
                0818CS201008
              </div>
            </div>
            <div className="flex justify-content space-x-8">
              <div
                onClick={() => history("/dashboard/requestmade")}
                className="hidden md:flex items-center hover:text-white space-x-8 text-2xl  font-bold text-black-full"
              >
                {/* <Link onClick={<RequestPopUp />}>Request</Link> */}
                Request
              </div>
              <div
                onClick={() => history("/dashboard/logout")}
                className="hidden md:flex items-center hover:text-white space-x-8 text-2xl  font-bold text-black-full"
              >
                {/* <Link onClick={<Logout />}>Logout</Link> */}
                {/* Logout */}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-gray-100">
        <h2 className="text-3xl font-bold mt-10">Student Information</h2>
        <div className="flex bg-blue-500 text-white rounded-lg shadow-lg p-8 pt-12 m-10 w-1/2 justify-between">
          <div className="flex flex-col md:flex-row md:justify-between mb-4 space-x-28">
            <div className="mb-4">
              <p className="font-bold mb-2">Name: {student?.name}</p>
              <p className="font-bold mb-2">Student ID: {student?._id}</p>
              <p className="font-bold mb-2">Major: {studentInfo.major}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">CGPA: {studentInfo.CGPA}</p>
              <p className="font-bold mb-2">
                Graduation Year: {studentInfo.graduationYear}
              </p>
              <p className="font-bold mb-2">Advisor: {studentInfo.advisor}</p>
            </div>
          </div>
          <div className=" w-[100px] h-[50px]">
            <img src={StudentImage} alt="Hi" className="rounded-full"></img>
          </div>
        </div>
      </div>
      {/* Dashboard - Start */}
      <div className="container mx-auto p-10 w-1/2">
        <h1 className="text-3xl font-bold mb-10 text-center">
          Student Dashboard
        </h1>
        <div className="text-white grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#2A9D8F] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">Results</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit</p> */}
          </div>
          <div className="bg-[#f94449] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4  text-center m-4">
              Fee Receipts
            </h2>
          </div>
          <div className="bg-[#F4A261] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              Gov't ID's
            </h2>
          </div>
          <div className="bg-[#A980D7] p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center m-4">
              Other Doc's
            </h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor</p> */}
          </div>
          {/* {student?.documents} */}
        </div>
      </div>

      <div className="flex justify-center m-8">
        <button
          className="flex justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
          type="submit"
          // onClick={UploadRecords}
          onClick={() => history("/dashboard/uploadrecords")}
        >
          Upload Records
        </button>
      </div>
    </>
  );
};

export default StudentDashboard;
