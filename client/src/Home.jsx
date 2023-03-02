// import { useEffect } from "react";
// import HeroSection from "./components/HeroSection";
// import { useGlobalContext } from "./context";
// import Services from "./SignUp";
// import Contact from "./Contact";

// const Home = () => {
//   const { updateHomePage } = useGlobalContext();

//   useEffect(() => updateHomePage(), []);

//   return (
//     <>
//       <HeroSection />
//       {/* <Services /> */}
//       <Contact />
//     </>
//   );
// };

// export default Home;

// // ***************************************************************************
// import React from "react";
// import Header from "./components/Header";
// import Contact from "./Contact";
// import Footer from "./components/Footer";

// function Home() {
//   return (
//     <div>
//       <Header />
//       <div className="container mx-auto py-6">
//         <h1 className="text-3xl font-bold mb-6">Welcome to my website!</h1>
//         <p className="text-lg mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//         <p className="text-lg mb-4">
//           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//           nisi ut aliquip ex ea commodo consequat.
//         </p>
//         <Contact />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;

// **********************************************************************************************************
import React, { Wrapper } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="mt-4">
          <ul className="flex">
            <li className="mr-6">
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 py-8 px-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="6"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
