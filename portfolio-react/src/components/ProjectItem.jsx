import React from 'react'

const ProjectItem = ({ title, imgUrl, stack, description, githubLink, appLink }) => {
  return (
    <div className='border-2 border-stone-800 rounded-md overflow-hidden mx-4 shadow-lg shadow-stone-500/50'>
        <video 
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-60 md:h-75 object-cover cursor-pointer' 
        >
            <source src={imgUrl} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
        <div className='w-full p-4'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {stack.map(item => (
                    <span className='inline-block px-2 py-1 font-semibold border-[1px] border-stone-800 rounded-md'>
                        {item}
                    </span>
                ))}
            </p>
            <p className='text-sm md:text-base mb-2 md:mb-3 font-semibold pt-2'>{description}</p>
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