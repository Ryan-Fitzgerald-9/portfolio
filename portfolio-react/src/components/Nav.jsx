import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className='container mx-auto flex items-center justify-end'>
        <Link to="/Projects" className="text-xl pr-5">Projects</Link>
        <Link to="/Contact" className="text-xl pr-5">Contact Me</Link>
      </div>
    </div>
  )
}

export default Nav