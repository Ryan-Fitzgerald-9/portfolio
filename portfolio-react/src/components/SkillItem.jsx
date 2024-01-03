import React from 'react'

const SkillItem = ({ title, imgLoc }) => {
  return (
    <div className='inline-block px-2 py-1 font-bold rounded-lg text-center'>
        <img className='mx-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-lg' src={imgLoc} alt={title} />
        <h4 className='flex justify-center text-base md:text-xl'>{title}</h4>
    </div>
  )
}

export default SkillItem