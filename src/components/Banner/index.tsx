import React from 'react';
import Image from 'next/image';
import banner from '../../../public/assets/images/banner.png';
import Button from '../Button';

const Banner = () => {
  return (
    <div className="container py-16">
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
            <div className='flex flex-col justify-center '>
                <Image
                    alt='banner image'
                    src={banner}
                    className='w-full'
                />
            </div>
            {/* px-10 md:pr-0 lg:pr-10 xl:pr-44 pt-5 :pt-0 */}
            <div className=' flex flex-col justify-center gap-6 '>
                <h1 className='text-4xl font-bold font-serif '>We Believe that a team makes any project better</h1>
                <p className='text-gray-500 text-sm leading-loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid.</p>
                <div>
                    <Button
                        value="Discover Now"
                        bg_color="bg-black"
                        style=""
                    />
                </div>

                 
            </div>
        </div>
    </div>
  )
}

export default Banner;