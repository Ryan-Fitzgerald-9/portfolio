import React from 'react'
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center px-[25px] md:px-[50px]'>
      <div id="home" className='mt-[10px] md:mt-[75px] mb-[50px] md:mb-[75px] md:pr-[50px] flex-col pt-20 pb-6'>
          <h1 className='text-4xl md:text-6xl mb-1 md:mb-3 font-bold'>Hi there, I'm Ryan!</h1>
          <p className='text-2xl md:text-3xl mb-3 font-medium text-yellow-500'>Former Senior Accountant turned Software Engineer</p>
          <p className='text-lg text-gray-400 max-w-3xl mb-6 font-bold'>I'm a self-motivated software engineer located in Blackstone, MA who enjoys solving challenging programming problems and debugging code. My 10+ years as an accountant enables me to approach projects with high attention to detail, process improvement ideas, and an organizational mindset. After achieving my Software Engineering Immersive Certificate from General Assembly, I'm now ready for new opportunities as a developer.</p>
          <div className="flex justify-center space-x-3 md:space-x-10 hover:cursor-pointer">
                <a 
                  href="https://github.com/Ryan-Fitzgerald-9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
                >
                    <FaGithub className='mr-2'/>
                    GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ryan-fitzgerald-rf09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
                >
                    <FaLinkedin className='mr-2'/>
                    LinkedIn
                </a>
                <a 
                  href="/assets/Ryan_Fitzgerald_Resume_2024.pdf" 
                  target="_blank" 
                  download
                  className='flex items-center px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
                >
                    <FaFilePdf className='mr-2'/>
                    Resume
                </a>
          </div>
      </div>
      <div className='mb-[50px] md:mt-[150px] md:ml-4 md:text-center'>
         <img className='object-cover min-w-[270px] h-[270px] rounded-full mx-auto md:mx-0' src="/assets/prof_pic.png" alt="my picture" />
      </div>
    </div>
  )
}

export default About