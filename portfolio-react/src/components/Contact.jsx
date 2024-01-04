import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className='py-20 px-[30px] text-white flex flex-col mx-auto'>
      <div className='flex flex-col items-center'>
        <h3 className='text-3xl md:text-4xl mb-8 font-bold'>Contact Me</h3>
        <p className='text-gray-400 text-lg md:text-xl'>If you would like to work together or have any questions, please reach out!</p>
        <div className="flex justify-center items-center space-x-10 my-8 hover:cursor-pointer">
          <a 
            href="mailto:rfitzgerald806@gmail.com" 
            className='flex items-center px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
          >
            <FaEnvelope className='mr-2'/> Email
          </a>
          <a 
            href="https://www.linkedin.com/in/ryan-fitzgerald-rf09" 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex items-center px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
          >
            <FaLinkedin className='mr-2'/> LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact