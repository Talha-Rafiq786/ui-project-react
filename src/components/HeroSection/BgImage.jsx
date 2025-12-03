import React from 'react'
import car from './../../assets/HeroBgImg/car.png'

const BgImage = () => {
  return (
    <div className="relative overflow-hidden">
      <img className='w-full h-[92.6vh] object-cover object-center brightness-35 ' src={car} alt='car'  />
      
    </div>
  )
}

export default BgImage