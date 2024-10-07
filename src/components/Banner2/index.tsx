import React from 'react';
import Image from 'next/image';
import banner2 from '../../../public/assets/images/banner2.png';
import Button from '../Button';



const Banner2 = () => {
    return (
        <div className="container py-16">
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 '>
                <div className=' flex flex-col justify-center gap-6
                     md:text-left  '>
                    <h1 className='text-4xl font-bold font-serif '>Simple way to make stylish living room</h1>
                    <p className='text-gray-500 text-sm leading-loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam adipisicing elit. Suscipit earum accusantium tempore nam aliquid.</p>
                    <div className='flex flex-row gap-6'>
                        <div className='max-w-16 space-y-2'>
                            <p className='text-3xl font-bold font-serif'>15</p>
                            <p className='text-gray-500 text-sm leading-6'>Years of Experience</p>
                        </div>
                        <div className='max-w-16 space-y-2'>
                            <p className='text-3xl font-bold font-serif'>350</p>
                            <p className='text-gray-500 text-sm leading-6'>Happy Clients</p>
                        </div>
                        <div className='max-w-16 space-y-2'>
                            <p className='text-3xl font-bold font-serif'>34</p>
                            <p className='text-gray-500 text-sm leading-6'>Award Gained</p>
                        </div>
                    </div>
                    <div>
                        <Button
                            value="Contact Us"
                            bg_color="bg-black"
                            style=""
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-center '>
                
                    <Image
                        src={banner2}
                        alt="Banner"
                        className='w-full'
                     />
                </div>
            </div>
        </div>
      )
}

export default Banner2;