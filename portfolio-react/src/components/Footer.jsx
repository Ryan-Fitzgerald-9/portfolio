import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gray-800 h-[40px] text-white py-2 pr-4 fixed bottom-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-end text-base md:text-xl">
            <h3 className="pr-2">rfitzgerald806@gmail.com</h3>
            <div className="flex space-x-2 hover:cursor-pointer">
                <a href="https://github.com/Ryan-Fitzgerald-9" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ryan-fitzgerald-rf09" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer