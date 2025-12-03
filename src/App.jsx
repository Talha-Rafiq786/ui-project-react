import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import CategoryFilterBar from './components/Category/CategoryFilterBar'
import Futter from './components/Futter/Futter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CategoryFilterBar/>
    </div>
  )
}

export default App