import React, { useState } from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

export default function Sidebar() {

  const [active,setActive] = useState("")

  return (
    <div className='sidebar p-5'>
        <ul className='list-unstyled t-l'>

           <li className='mb-3'>
             <Link 
               to="/Home" 
               className={`text-decoration-none text-white ${active === "home" ? "fs-2" : "fs-4"}`}
               onClick={() => setActive("home")}
             >
               Home
             </Link>
           </li>

           <li className='mb-3'>
             <Link 
               to="/About" 
               className="text-decoration-none text-white"
               onClick={() => setActive("about")}
             >
               About
             </Link>
           </li>

           <li>
             <Link 
               to="/Contact" 
               className="text-decoration-none text-white"
               onClick={() => setActive("contact")}
             >
               Contact
             </Link>
           </li>

        </ul>
    </div>
  )
}
