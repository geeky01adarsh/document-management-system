import React from "react";
import logo from "../images/LogoIIST.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <div className="footer-about">
            <img src={logo} alt="logo" className="w-16 h-12" />
            <h3>Indore Institute of Science and Technology</h3>
          </div>
          <p className="leading-loose">
            Opposite Indian Institute of Management, Rau - Pithampur Rd,
          </p>
          <p> Rau, Indore, Madhya Pradesh 453331</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-gray-300">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Campus Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Alumni
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-gray-300">
                +91 8224071000 / 2000
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                +91 8225071000
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                admissions@indoreinstitute.com
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                className="hover:text-gray-300"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        {/* <div className="container grid grid-two-column"> */}
        <p>@{new Date().getFullYear()} IISTorage. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
