import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {

  return (
    <div className="flex justify-center bg-gray-800 h-[50px] p-4 fixed top-0 left-0 right-0 z-50">
      <div className='container ml-[30px] text-white flex items-center justify-start text-xl md:text-3xl font-bold hover:cursor-pointer'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="pr-5">Ryan Fitzgerald</Link>
      </div>
      <div className='container mx-auto text-stone-300 flex items-center justify-evenly text-base md:text-xl font-bold hover:cursor-pointer'>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="pr-5">Skills</Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="pr-5">Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="pr-5">Contact</Link>
      </div>
    </div>
  )
}

export default Nav