import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <div className='flex justify-center'>
      <div id="home" className='my-[75px] px-[50px] flex-col pt-20 pb-6'>
          <h1 className='text-4xl md:text-6xl mb-1 md:mb-3 font-bold'>Hi there, I'm Ryan!</h1>
          <p className='text-2xl md:text-3xl mb-3 font-medium text-yellow-500'>Former Senior Accountant turned Software Engineer</p>
          <p className='text-lg text-gray-400 max-w-xl mb-6 font-bold'>I'm a self-motivated software engineer located in Blackstone, MA who enjoys solving challenging programming problems and debugging code. My 10+ years as an accountant enables me to approach projects with high attention to detail, process improvement ideas, and an organizational mindset. After achieving my Software Engineering Immersive Certificate from General Assembly, I'm now ready for new opportunities as a developer.</p>
          <div className="flex ml-16 space-x-2 hover:cursor-pointer">
                <a 
                  href="https://github.com/Ryan-Fitzgerald-9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex mx-10 px-2 py-2 font-semibold border-[1px] border-stone-100 hover:bg-orange-700 rounded-md'
                >
                    <FaGithub />
                    GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ryan-fitzgerald-rf09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex px-2 py-2 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
          </div>
      </div>
      <div className='pl-[50px] mt-[150px]'>
         <img className='object-cover w-[300px] h-[300px] rounded-full' src="/assets/prof_pic.png" alt="my picture" />
      </div>
    </div>
  )
}

export default About