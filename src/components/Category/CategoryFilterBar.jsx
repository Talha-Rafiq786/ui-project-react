import React, { useState } from 'react'
import FeaturedAuctions from './FeaturedAuctions';

const categories = [
  "All Categories",
  "Vehicles",
  "Real Estate",
  "Art & Collectibles",
  "Industrial Machinery",
];

const CategoryFilterBar = () => {
  const [active, setActive] = useState('All Categories')

  return (
    <div className='bg-gray-200 p-6'>
      <h1 className='text-4xl font-bold text-black mb-5'>Browse by Category</h1>
      <div className='flex flex-wrap gap-4'>
        {categories.map((elem, index) => (
          <button
            key={index}
            onClick={() => setActive(elem)}
            className={`px-5 py-2 rounded text-sm font-medium transition-all 
              ${active === elem
                ? "bg-[#0B1F4D] text-white shadow-md"
                : "bg-white text-[#0B1F4D] border border-gray-100 hover:bg-gray-100"
              }
            `}
          >
            {elem}
          </button>
        ))}
      </div>
      <FeaturedAuctions />
    </div>
  )
}

export default CategoryFilterBar
