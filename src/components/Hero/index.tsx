import React from 'react';
import Image from 'next/image';
import hero from '../../../public/assets/images/hero.png';
import Button from '../Button';

const Hero = () => {
  return <>
  <div className='container flex justify-between items-center'>
    <div>
        <h1>SKETCH LUXURY INTERIOR DESIGN</h1>
        <p>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>
        <div>
        {/* <button className="border-[1px] border-black bg-black py-2 px-4 font-semibold  text-sm lg:text-base
            shadow-[5px_5px_0px_0px]">
            Try For Free
        </button> */}
            <Button 
                value='Get started'
                shadow='shadow-[5px_5px_0px_0px]'
                bg_color='bg-white'
                text_color='text-black'
            />
            <Button 
                value='Contact Us'
                shadow='shadow-[5px_5px_0px_0px]'
                bg_color='bg-white'
                text_color='text-black'
            />
        </div>
    </div>
    <div>
        <Image 
            src={hero}
            alt="hero image"
            width={800} 
        />
    </div>
  </div>
  </>
}

export default Hero;