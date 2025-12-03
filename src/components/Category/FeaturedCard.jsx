import React from 'react'

const FeaturedCard = ({img,tital,price,time}) => {
  return (
    <div className="card bg-base-200 w-95 shadow-sm mt-5">
                <figure className="">
                    <img
                        src={img}
                        alt={tital}
                         className='h-70 w-full object-cover' />
                </figure>
                <div className="card-body  p-4 bg-white">
                    <h1 className="card-title mt-3 text-xl font-bold ">{tital}</h1>
                    <div className='mt-3 flex justify-between '>
                        <p className='text-gray-400'>Current Bid</p>
                        <p className='text-2xl items-center text-gold font-bold'>{price}</p>
                    </div>
                    <div className='mt-2 flex justify-between '>
                        <p className='text-gray-400'>Time Remaining</p>
                        <p className='text-xl items-center  font-bold'>{time}</p>
                    </div>
                    
                    <div className="card-actions flex items-center justify-center mt-4">
                        <button className="w-full btn-blue text-white py-3 rounded transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer">View Details</button>
                    </div>
                </div>
            </div>
  )
}

export default FeaturedCard