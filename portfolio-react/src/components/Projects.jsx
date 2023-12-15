import React from 'react'
import portfolio from '../data/portfolio'
import ProjectItem from './ProjectItem'

const Projects = () => {

  return (
    <div id="projects" className='flex flex-col md:flex-row items-center justify-center'>
      <div className='flex flex-col items-center'>
          <h3 className='text-3xl md:text-4xl mb-4 font-bold'>Projects</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map(project => (
              <ProjectItem 
                key={project.title}
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
    </div>
  )
}

export default Projects