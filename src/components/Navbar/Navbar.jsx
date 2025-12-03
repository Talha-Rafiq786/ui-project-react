import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 px-5 flex items-center gap-6">
        <Logo />
        <div className="ml-auto flex items-center  gap-15 ">
        <a className="hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105" href="">Auction</a>
        <a className="hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105" href="">About Us</a>
        <a className="hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105" href="">Contact</a>
        <button className="btn-gold  px-4 py-2 rounded text-black cursor-pointer hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105">Login/Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
