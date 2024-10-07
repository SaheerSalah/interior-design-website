import React from 'react'

const Newsletter = () => {
  return (
    <div className="container p-16">
        <div className='text-center max-w-[550px] mx-auto space-y-10 pb-10'>
            <h1 className='text-3xl font-extrabold font-serif mb-2'>Subsribe to our Newsletter</h1>
            <p className='text-gray-500 text-sm max-w-[350px] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero doloremque ab eum!</p>
            <div className='flex flex-row gap-0 justify-center'>
                <input type="email" placeholder='Enter your email' className=' border-[1px] border-gray-400 p-2'/>
                <button className='bg-black text-white p-4 px-7 uppercase'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;