import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import AddExpencees from './components/AddExpences'
import { Route, Routes } from 'react-router-dom'

function App() {

 <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/AddExpences' element={<AddExpencees />} />
 </Routes>


}

export default App
