import React from "react";

const StudentDashboard = () => {
  return (
    <>
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
    </>
  );
};

export default StudentDashboard;
