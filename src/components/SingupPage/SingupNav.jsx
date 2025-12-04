import React from 'react'
import Logo from '../Navbar/Logo'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const SingupNav = () => {
  return (
    <div className="px-10 py-5">
      <div className="relative flex items-center justify-between">
        
        
        <Logo />

        
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600 cursor-pointer px-3">Already have an account?</p>
          <button className="text-blue-600 border-2 px-3 py-2 rounded-xl font-semibold hover:underline cursor-pointer">
            Log In
          </button>
        </div>

      </div>
      <div className='flex mt-15'>
      <LeftContent/>
      <RightContent/>
      </div>
    </div>
  )
}

export default SingupNav
