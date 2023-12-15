import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='pt-20 flex flex-col mx-auto'>
      <div className='flex flex-col items-center'>
        <h3 className='text-3xl md:text-4xl mb-4 font-bold'>Contact Me</h3>
        <form 
          //input location for post
          action=""
          method='POST'
          className='flex flex-col px-4 w-full md:w-7/12 mb-[100px]'
        >
            <input 
                type="text"
                name="name"
                placeholder="Name"
                className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
            />
            <input 
                type="text"
                name="email"
                placeholder="Email"
                className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
            />
            <textarea 
                name="message" 
                placeholder="Message"  
                rows="10"
                className='mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
            />
            <button
                type='button'
                className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-l from-orange-500 to-yellow-500 drop-shadow-md'>
              Send Message
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact