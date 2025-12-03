import React from "react";
import { Facebook, Twitter } from "lucide-react";

const Futter = () => {
  return (
    <footer className="bg-[#0B1F4D] text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* H&T Auctions */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">H&T Auctions</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-300 cursor-pointer">Careers</li>
              <li className="hover:text-yellow-300 cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-300 cursor-pointer">Contact Us</li>
              <li className="hover:text-yellow-300 cursor-pointer">FAQ</li>
              <li className="hover:text-yellow-300 cursor-pointer">Help Center</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-300 cursor-pointer">Terms of Service</li>
              <li className="hover:text-yellow-300 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-yellow-300 cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-yellow-300" />
              <Twitter className="cursor-pointer hover:text-yellow-300" />
            </div>
          </div>

        </div>

        {/* Line */}
        <div className="border-t border-gray-600 mt-8"></div>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-300 mt-4">
          © 2024 Hammers & Tongues. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Futter;
