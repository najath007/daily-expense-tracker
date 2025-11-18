import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About' 
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <Sidebar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </div>

  )

}

export default App
