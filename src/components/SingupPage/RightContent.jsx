import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const RightContent = () => {
  return (
    <div className="w-1/2 flex justify-center">
      <div className="bg-gray-50 w-4/5 p-10 rounded-2xl shadow-sm">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900">
          Your Gateway to Exclusive Auctions
        </h1>

        {/* Feature 1 */}
        <div className="flex items-start gap-4 mt-8">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
            <FaShieldAlt size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Bid with Confidence</h2>
            <p className="text-gray-600 text-sm mt-1">
              Participate in secure, transparent auctions for unique and
              high-value items.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 mt-6">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
            <FaRegHeart size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Save to Your Watchlist</h2>
            <p className="text-gray-600 text-sm mt-1">
              Keep track of items you love and never lose sight of a potential
              winning bid.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4 mt-6">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
            <IoNotificationsOutline size={22} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Never Miss an Auction</h2>
            <p className="text-gray-600 text-sm mt-1">
              Get timely alerts for auctions ending soon or new items in your
              favorite categories.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightContent;
