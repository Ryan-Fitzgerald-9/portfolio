import React from 'react'

const Contact = () => {
  return (
    <div className='mt-20 flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        {/* <h3 className='flex flex-col'>Contact Me</h3> */}
        <form 
          action=""
          method='POST'
          className='flex flex-col w-full md:w-7/12'
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