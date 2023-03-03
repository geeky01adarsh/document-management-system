import React from "react";



function StudentRecord({ students }) {
  return (
    <div className="text-2xl bg-red-500 p-8 grid place-items-center overflow-x-auto align-middle">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr className="text-3xl bg-blue-500">
            <th className="font-medium px-4 py-2">S.no.</th>
            <th className="font-medium px-4 py-2">Name</th>
            <th className="font-medium px-4 py-2">Roll No.</th>
            {/* <th className="px-4 py-2">Branch</th>
            <th className="px-4 py-2">Year</th> */}
            {/* <th className="px-4 py-2">Admission Year</th> */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}
            >
              <td className="border px-4 py-2">{student.sno}.</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.enumber}</td>
              {/* <td className="border px-4 py-2">{student.branch}</td>
              <td className="border px-4 py-2">{student.year}</td> */}
              {/* <td className="border px-4 py-2">{student.admissionyear}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentRecord;
