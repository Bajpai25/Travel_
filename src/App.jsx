import React from 'react'
import Home from './assets/Home'
import { Route,Routes } from 'react-router-dom'
import About from './assets/About/About'
import Contact from './assets/Contact/Contact'
import Travel from './assets/Travel/Travel'
import Day from './assets/Day_Trips/Day'
import Terms from './assets/Terms'
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/travel" element={<Travel/>}></Route>
      <Route path="/day" element={<Day/>}></Route>
      <Route path="/terms" element={<Terms/>}></Route>
    </Routes>
    </div>
  )
}

export default App