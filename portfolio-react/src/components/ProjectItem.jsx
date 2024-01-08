import React from 'react'
import techIcons from '../data/techicons'

const ProjectItem = ({ title, imgUrl, stack, description, githubLink, appLink }) => {
  const getTechIcon = (techTitle) => {
    const techItem = techIcons.find((item) => item.title === techTitle)
    if (techItem) {
      return <img key={techTitle} src={techItem.imgLoc} alt={techTitle} className="w-8 h-8 md:w-[50px] md:h-[50px]" />
    }
    return null
  }

  return (
    <div className='border-2 min-w-[300px] max-w-[400px] border-stone-800 rounded-md overflow-hidden mx-auto shadow-lg shadow-stone-500/50 relative'>
      <video 
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-[180px] md:h-[240px] object-cover transition-transform transform hover:scale-110' 
      >
        <source src={imgUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-0 left-0 w-full h-[190px] md:h-[255px] flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 text-white'>
        <p className='text-sm md:text-base mb-2 md:mb-3 font-semibold pt-2'>{description}</p>
      </div>
      <div className='w-full p-4'>
        <h3 className='flex justify-center text-xl md:text-2xl mb-2 md:mb-3 font-bold text-yellow-500'>{title}</h3>
        <div className='flex flex-wrap gap-2 items-center justify-center mb-4'>
          {stack.map((item) => getTechIcon(item))}
        </div>
        <div className='flex justify-center gap-8'>
          <a 
            href={githubLink} 
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
          >
            Github
          </a>
          {appLink && (
            <a 
              href={appLink} 
              target='_blank'
              rel='noopener noreferrer'
              className='px-2 py-1 font-semibold border-[1px] border-stone-200 hover:bg-orange-700 rounded-md'
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem