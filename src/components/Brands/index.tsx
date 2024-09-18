import React from 'react';
import Image from 'next/image';
import brand1 from '../../../public/assets/images/brand1.png';
import brand2 from '../../../public/assets/images/brand2.png';
import brand3 from '../../../public/assets/images/brand3.png';
import brand4 from '../../../public/assets/images/brand4.png';
import brand5 from '../../../public/assets/images/brand5.png';

const Brands = () => {
  return (
    <div className="container py-14">
        <div className="flex justify-center md:pl-3
            lg:justify-start gap-6 flex-wrap ">
            <Image
                src={brand1}
                alt='brand1 image'
                className='w-[110px] md:w-[200px]'
            />
            <Image
                src={brand2}
                alt='brand2 image'
                className='w-[110px] md:w-[200px]'
            />
            <Image
                src={brand3}
                alt='brand3 image'
                className='w-[110px] md:w-[200px]'
            />
            <Image
                src={brand4}
                alt='brand4 image'
                className='w-[110px] md:w-[200px]'
            />
            <Image
                src={brand5}
                alt='brand5 image'
                className='w-[110px] md:w-[200px]'
            />
        </div>
    </div>
  )
}

export default Brands;