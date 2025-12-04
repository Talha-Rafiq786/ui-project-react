import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";


const LeftContent = () => {
  return (
    <div className="w-1/2 px-10">
      
      
      <h1 className="text-4xl font-bold text-gray-900">
        Create Your H&T Account
      </h1>

      <form className="mt-10">
        
      
        <label className="text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-blue-300"
        />

        
        <label className="text-sm font-semibold text-gray-700 mt-5 block">
          Email or Phone Number
        </label>
        <input
          type="text"
          placeholder="yourname@example.com"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-blue-300"
        />

     
        <label className="text-sm font-semibold text-gray-700 mt-5 block">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-blue-300"
        />

       
        <div className="flex items-start gap-2 mt-5">
          <input type="checkbox" className="mt-1" />
          <p className="text-sm text-gray-700">
            By creating an account, you agree to our{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>

        
        <button className="w-full bg-blue-700 text-white rounded-xl py-3 mt-6 text-lg font-semibold hover:bg-blue-800">
          Create Account
        </button>

       
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        
        <div className="flex gap-4">
          <button className="w-1/2 border px-4 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2">
            <FcGoogle />
            <span>Sign up with Google</span>
          </button>

          <button className="w-1/2 border px-4 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2">
            <IoLogoApple />
            <span>Sign up with Apple</span>
          </button>
        </div>

        
        <div className="bg-blue-50 border border-blue-200 text-sm p-4 rounded-lg mt-6">
          <p className="text-gray-700">
            <span className="font-semibold">Please note:</span> To place bids,
            you will need to complete a simple identity verification (KYC)
            process after registration.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LeftContent;
