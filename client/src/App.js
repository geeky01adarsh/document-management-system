import Login from "./components/Login";
import Contact from "./components/Contact";
import Home from "./components/Home";
import RegistrationPage from "./components/RegistrationPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentDashboard from "./components/StudentDashboard";
import UploadRecord from "./components/UploadRecords";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <RegistrationPage /> */}
      {/* <StudentDashboard /> */}
      {/* <Home /> */}
      {/* <UploadRecord /> */}
      {/* <Login/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
