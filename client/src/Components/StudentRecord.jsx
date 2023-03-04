import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allStudentData, studentData } from "../App";
import axios from "axios";

const URL = "http://localhost:5000/";

function StudentRecord() {
  const history = useNavigate();
  const [allStudent, setAllStudent] = useContext(allStudentData);
  const [student, setStudent] = useContext(studentData);
  const [student_id, setStudent_id] = useState();

  console.log(allStudent);

  const handleStudent = async (e, student_id) => {
    // console.log("hi");
    e.preventDefault();
    // const student_id = e.target.value;
    console.log(student_id);
    await axios
      .get(`${URL}staff/student/${student_id}`)
      .then((response) => {
        console.log(student);
        console.log("student data", response.data);
        setStudent(response.data.StudentDetails);
        console.log(student);
        history("/dashboard");
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  return (
    <div className="text-2xl bg-red-500 p-8 grid place-items-center overflow-x-auto align-middle">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr className="text-3xl bg-blue-500">
            {/* <th className="font-medium px-4 py-2">S.no.</th> */}
            <th className="font-medium px-4 py-2">Roll No.</th>
            <th className="font-medium px-4 py-2">Name</th>
            {/* <th className="px-4 py-2">Branch</th>
            {/* <th className="px-4 py-2">Year</th> */}
            {/* <th className="px-4 py-2">Admission Year</th> */}
          </tr>
        </thead>
        <tbody>
          {allStudent?.map((student) => (
            <tr
            // key={index}
            // className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}
            >
              {/* <td className="border px-4 py-2">{student?.}.</td> */}
              <td
                className="border px-4 py-2"
                onClick={async (e) => {
                  await setStudent_id(student?._id);
                  handleStudent(e);
                }}
              >
                {" "}
                <div onClick={(e) => handleStudent(e, student?._id)}>
                  {student?._id}
                </div>
              </td>
              <td className="border px-4 py-2">{student?.name}</td>
              {/* <td className="border px-4 py-2">{student.enumber}</td> */}
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
