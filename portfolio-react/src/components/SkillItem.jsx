import React from 'react'

const SkillItem = ({ title, imgLoc }) => {
  return (
    <div className='inline-block px-2 py-1 font-bold rounded-lg text-center'>
        <img className='mx-auto w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-lg' src={imgLoc} alt={title} />
        <h4 className='flex justify-center text-base md:text-lg'>{title}</h4>
    </div>
  )
}

export default SkillItem