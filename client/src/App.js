import React, { useState } from "react";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Home from "./components/Home";
import RegistrationPage from "./components/RegistrationPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentDashboard from "./components/StudentDashboard";
import UploadRecord from "./components/UploadRecords";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorityDashboard from "./components/AuthorityDashboard";
import { createContext } from "react";
import RequestPopUp from "./components/RequestPopUp";
import StudentRecord from "./components/StudentRecord";
import Rough from "./components/Rough";

const staffName = createContext();
const studentName = createContext();
const allStudentName = createContext();
const requestDetail = createContext();

const App = () => {
  // const students = [
  //   {
  //     sno: 1,
  //     name: "Adarsh",
  //     enumber: "0818IT201008",
  //     // branch: "CS",
  //     // year: "3rd",
  //     // admissionyear: 2024
  //   },
  //   {
  //     sno: 2,
  //     name: "Rupali",
  //     enumber: "0818EC201043",
  //     // branch: "CS",
  //     // year: "3rd",
  //     // admissionyear: 2020
  //   },
  //   // more student objects...
  // ];

  const [staff, setStaff] = useState();
  const [student, setStudent] = useState();
  const [allStudent, setAllStudent] = useState([]);
  const [request, setRequest] = useState([]);

  return (
    <>
      {/* <StudentDashboard /> */}
      {/* <AuthorityDashboard /> */}
      {/* <UploadRecord /> */}
      {/* <RequestPopUp /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter> */}

      {/* **************COntext APIs ***************************************** */}
      {/* Context API For Staff Dashboard  */}
      {/* <staffName.Provider value={[staff, setStaff]}>
        <AuthorityDashboard />
      </staffName.Provider> */}

      {/* Context API For Student Dashboard  */}
      {/* <studentName.Provider value={[student, setStudent]}>
        <StudentDashboard />
      </studentName.Provider> */}

      {/* Context API For AllStudentNames  */}
      {/* <studentName.Provider value={[allStudent, setAllStudent]}> */}
      {/* <StudentRecord students={[allStudent, setAllStudent]} /> */}
      {/* </studentName.Provider> */}

      {/* Context API For Student Dashboard  */}
      {/* <studentName.Provider value={[request, setRequest]}> */}
      {/* <StudentDashboard /> */}
      {/* </studentName.Provider> */}

      {/* For checking request popup  */}
    </>
  );
};

export default App;
export { staffName };
