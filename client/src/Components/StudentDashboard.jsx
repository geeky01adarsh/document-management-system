import React from "react";
import "../App.css";

const StudentDashboard = () => {
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
      <div className="flex flex-col items-center bg-gray-100">
        <h2 className="text-2xl font-bold mt-10">Student Information</h2>
        <div className="flex bg-yellow-500 rounded-lg shadow-lg p-8 m-10 w-3/4 justify-between">
          <div className="flex flex-col md:flex-row md:justify-between mb-4 space-x-28">
            <div className="mb-4">
              <p className="text-gray-700 font-bold mb-2">
                Name: {studentInfo.name}
              </p>
              <p className="text-gray-700 font-bold mb-2">
                Student ID: {studentInfo.studentId}
              </p>
              <p className="text-gray-700 font-bold mb-2">
                Major: {studentInfo.major}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-bold mb-2">
                CGPA: {studentInfo.CGPA}
              </p>
              <p className="text-gray-700 font-bold mb-2">
                Graduation Year: {studentInfo.graduationYear}
              </p>
              <p className="text-gray-700 font-bold mb-2">
                Advisor: {studentInfo.advisor}
              </p>
            </div>
          </div>
          <div>
            <img src="" alt="Hi"></img>
          </div>
        </div>
      </div>
      {/* Dashboard - Start */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Grades</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Attendance</h2>
            <p className="text-gray-700">Lorem ipsum dolor</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
            <p className="text-gray-700">Lorem ipsum dolor</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Exams</h2>
            <p className="text-gray-700">Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      {/* Dashboard - End */}
    </>
  );
};

export default StudentDashboard;
