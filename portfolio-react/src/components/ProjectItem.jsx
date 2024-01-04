import React from 'react'

const ProjectItem = ({ title, imgUrl, stack, description, githubLink, appLink }) => {
  return (
    <div className='border-2 min-w-[300px] border-stone-800 rounded-md overflow-hidden mx-auto shadow-lg shadow-stone-500/50 relative'>
      <video 
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-[240px] object-cover transition-transform transform hover:scale-110' 
      >
        <source src={imgUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-0 left-0 w-full h-[255px] flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-80 p-4 text-white'>
        <p className='text-sm md:text-base mb-2 md:mb-3 font-semibold pt-2'>{description}</p>
      </div>
      <div className='w-full p-4'>
        <h3 className='flex justify-center text-xl md:text-2xl mb-2 md:mb-3 font-semibold text-yellow-500'>{title}</h3>
        <p className='flex flex-wrap gap-2 flex-row items-center mb-4 justify-center text-xs md:text-sm'>
          {stack.map(item => (
            <span key={item} className='inline-block px-2 py-1 font-semibold border-[1px] border-stone-800 rounded-md'>
              {item}
            </span>
          ))}
        </p>
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