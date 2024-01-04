import React from 'react'
import techicons from '../data/techicons'
import SkillItem from './SkillItem'


  
const Skills = () => {

return (
    <div id="skills" className='flex flex-col md:flex-row items-center justify-center mb-[100px]'>
      <div className='flex flex-col items-center'>
          <h3 className='text-3xl md:text-4xl mb-4 font-bold'>Skills</h3>
          <h5 className='text-lg md:text-2xl mb-4 font-bold text-yellow-500'>Languages | Libraries | Frameworks | Tools</h5>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {techicons.map(skill => (
              <SkillItem 
                key={skill.title}
                imgLoc={skill.imgLoc}
                title={skill.title}
                type={skill.type}
              />
            ))}
          </div>
      </div>
    </div>
  )
}
  
export default Skills