import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import CategoryFilterBar from './components/Category/CategoryFilterBar'
import SingUp from './components/SingupPage/SingUp'
import Futter from './components/Futter/Futter'

const App = () => {
  const location = useLocation()  // current route

  // Footer ko sirf '/' (home) pe show karenge
  const showFooter = location.pathname === '/'

  return (
    <div className=''>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <CategoryFilterBar />
            </>
          }
        />
        <Route path='/signup' element={<SingUp />} />
        {/* Add other pages here */}
      </Routes>

      {/* Conditional Footer */}
      {showFooter && <Futter />}
    </div>
  )
}

export default App
