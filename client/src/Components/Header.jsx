import React from "react";

function Header() {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <img src="/logo.svg" alt="Site Logo" className="w-12" />
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
