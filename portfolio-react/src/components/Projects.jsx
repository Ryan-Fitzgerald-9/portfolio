import React from 'react'
import portfolio from '../data/portfolio'
import ProjectItem from './ProjectItem'

const Projects = () => {

  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {portfolio.map(project => (
          <ProjectItem 
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            description={project.description}
            githubLink={project.githubLink}
            appLink={project.appLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects