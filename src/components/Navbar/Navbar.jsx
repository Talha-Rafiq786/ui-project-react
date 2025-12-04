import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 px-5 flex items-center gap-6">
      <Link to='/'><Logo /></Link>
      <div className="ml-auto flex items-center gap-6">
        <Link className="hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105" to='/'>Auction</Link>
        <Link className="hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105" to='/about'>About Us</Link>
        <Link className="hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105" to='/contact'>Contact</Link>
        <Link to='/signup' className="btn-gold text-xl px-4 py-2 rounded text-black cursor-pointer hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105">
          Login/Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
