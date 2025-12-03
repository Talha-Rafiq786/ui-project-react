import React from 'react'
import BgImage from './BgImage'

const Hero = () => {
    return (
        <div className='relative'>
            <BgImage />
            <div className='absolute inset-0 text-white  flex-col m-45 '>
            <h1 className='text-6xl font-bold mt-5'>Premier Online<br /> Auctions.  Unbeatable Value.</h1>
            <p className='text-xl mt-9 w-150'>Discover Exclusive deals on vehicels, real estate,art,and more. You next prized possession awaits.</p>
            <button className='px-5 py-3  mt-14 btn-gold rounded text-black hover:text-white transition-all duration-100 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer'>View All Auction</button>
            </div>
        </div>
    )
}

export default Hero