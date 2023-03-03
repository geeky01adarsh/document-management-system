import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./RegistrationPage";
import ImageSlider from "./ImageSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";

function Home() {
  return (
    // <div className="flex flex-col min-h-screen">
    <>
      <Navbar />
      {/* <ImageSlider /> */}
      <div>
        <ImageSlider images={[image1, image2, image3]} duration={4000}/>
      </div>
      <Contact />
      <Footer />
    </>
    // </div>
  );
}

export default Home;
