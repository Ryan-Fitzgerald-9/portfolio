import React from 'react'

const SkillItem = ({ title, imgLoc }) => {
  return (
    <div className='inline-block px-2 py-1 font-bold border-[1px] border-stone-200 rounded-lg'>
        <img className='w-[120px] h-[120px] rounded-lg' src={imgLoc} alt={title} />
        <h4 className='flex justify-center text-lg md:text-xl'>{title}</h4>
    </div>
  )
}

export default SkillItem