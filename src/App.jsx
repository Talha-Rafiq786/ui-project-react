import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import CategoryFilterBar from './components/Category/CategoryFilterBar'
import Futter from './components/Futter/Futter'
import SingUp from './components/SingupPage/SingUp'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar  />}/>
        <Route path='/' element={<Hero />}/>
        <Route path='/' element={<CategoryFilterBar />}/>
        <Route path='/singUp' element={<SingUp />}/>

        
        
      </Routes>
    </div>
  )
}

export default App