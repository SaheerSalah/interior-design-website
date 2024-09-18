import React from 'react';
import Image from 'next/image';
import hero from '../../../public/assets/images/hero.png';
import Button from '../Button';

const Hero = () => {
  return <>
  <div className='container py-16 md:pt-7 lg:pt-10 '>
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:min-h-[500px] '>
        <div className=' flex flex-col justify-center gap-6 
             text-center md:text-left px-10 md:pr-0 lg:pr-10 xl:pr-44 pt-5 :pt-0 '>
            <h1 className='text-4xl font-bold font-serif'>SKETCH LUXURY INTERIOR DESIGN</h1>
            <p className='text-gray-500 text-sm leading-loose'>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>
            <div className='space-x-4'>
                <Button 
                    value='Get started'
                    bg_color='bg-black'
                    style='uppercase '
                />
                <Button 
                    value='Contact Us'
                    bg_color='bg-white'
                    style='uppercase '
                />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image 
                src={hero}
                alt="hero image"
                className='object-cover w-[80%] md:w-[100%]'
                
            />
        </div>
    </div>
  </div>
  </>
}

export default Hero;