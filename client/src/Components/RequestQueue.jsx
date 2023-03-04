import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { requestDetail, studentData } from "../App";

function RequestQueue() {
  const [request, setRequest] = useContext(requestDetail);
  const [student, setStudent] = useContext(studentData); 

  console.log(request);
  return (
    <div className="text-2xl bg-red-500 p-8 grid place-items-center overflow-x-auto align-middle">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr className="text-3xl bg-blue-500">
            {/* <th className="font-medium px-4 py-2">S.no.</th> */}
            <th className="font-medium px-4 py-2">RequestName</th>
            <th className="font-medium px-4 py-2">Student_Id</th>
            <th className="px-4 py-2">RequestDetails</th>
            <th className="px-4 py-2">RequestValue</th>
            {/* <th className="px-4 py-2">Admission Year</th> */}
          </tr>
        </thead>
        <tbody>
          {request?.map((request) => (
            <tr
            // key={index}
            // className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}
            >
              {/* <td className="border px-4 py-2">{student?.}.</td> */}
              <td className="border px-4 py-2">{request?.requestName}.</td>
              <td className="border px-4 py-2">{request?.student_id}</td>
              <td className="border px-4 py-2">{request?.requestDetails}</td>
              <td className="border px-4 py-2">{request?.requestValue}</td>
              {/* <td className="border px-4 py-2">{student.year}</td> */}
              {/* <td className="border px-4 py-2">{student.admissionyear}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestQueue;
