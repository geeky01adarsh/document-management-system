import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Components/Login";
import Role from "./Components/Role";
import AuthorityDash from "./Components/AuthorityDashboard";
import RegistrationPage from "./Components/RegistrationPage";
import StudentDash from "./Components/StudentDashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Role/> */}
      {/* <Login /> */}
      {/* <SignUpStudent /> */}
      {/* <AuthorityDash /> */}
      {/* <StudentDash /> */}

      <ChakraProvider>
        <RegistrationPage />
      </ChakraProvider>
    </>
  );
}

export default App;
