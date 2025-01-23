import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const NavBar1 = () => {
  return (
    <nav className="bg-green-900 text-white  ">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-2 px-4 border-white-300">
        
        
        <div className="flex space-x-10 p-2">
          <a href="#" className="hover:">
            ERP Login
          </a>
          <a href="#" className="hover:">
            Download ERP App
          </a>
          <a href="#" className="hover:">
            ERP User Manual
          </a>
          <a href="#" className="hover:">
            Transport
          </a>
          <a href="#" className="hover:">
            Mandatory Public Disclosure
          </a>
        </div>


        <div className="flex space-x-10 items-center pl-2 p-2 lg:mr-14">
          <a href="#" className="hover:text-gray-300 ">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;
