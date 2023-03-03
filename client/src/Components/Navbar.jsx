import React, { useState } from "react";
import logo from "../images/logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[100px]">
            <div className="flex-shrink-0">
              <img className="h-12 w-44" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-2xl text-black-full">
              <a
                href="/"
                className=" hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                Home
              </a>
              <a
                href="/login"
                className=" hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                Login
              </a>
              <a
                href="/register"
                className=" hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                Registration
              </a>
              {/* <a
                href="/contact"
                className=" hover:text-white px-3 py-2 rounded-md  font-medium"
                // onClick={'#contact'}
              > */}
              <Link
                spy={true}
                to="contact"
                className=" hover:text-white px-3 py-2 rounded-md  font-medium"
                smooth={true}
              >
                Contact
              </Link>
              {/* </a> */}
            </div>
            <div className="flex md:hidden">
              <button
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showMenu ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
