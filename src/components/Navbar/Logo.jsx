import React from 'react'
import logo from '../../assets/Logo/logo.png'

const Logo = () => {
  return (
    <div className='px-6 flex items-center cursor-pointer'>
      <img className='w-11 rounded-xl' src={logo} />
      <h1 className="text-2xl px-5">Hammer & Tongues</h1>
    </div>
  )
}

export default Logo
