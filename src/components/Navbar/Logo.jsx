import React from 'react'
import logo from './..//../assets/Logo/logo.png'

const Logo = () => {
  return (
    <div className='px-6 flex items-center'>
      <a href='/'><img className='w-11 rounded-xl' src={logo} /></a>
      <a href="/"> <h1 className="text-2xl px-5">Hammer & Tongues</h1></a>
    </div>
  )
}

export default Logo