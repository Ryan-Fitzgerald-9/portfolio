import React from 'react'

const ProjectItem = ({ title, imgUrl, stack, description, githubLink, appLink }) => {
  return (
    <div>
        <img 
            src={imgUrl} 
            alt="project"
            className='w-full h-60 md:h-75 object-cover cursor-pointer' 
        />
        <div className='w-full p-4'>
            <h3>{title}</h3>
            <p>
                {stack.map(item => (
                    <span>
                        {item}
                    </span>
                ))}
            </p>
        </div>
    </div>
  )
}

export default ProjectItem