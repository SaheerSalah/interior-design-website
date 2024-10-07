import Image from 'next/image';
import React from 'react';

const TestimonialData = [
    {
        id:"1",
        name:"John Doe",
        designation:"Developer",
        img:"https://i.pravatar.cc/300?img=1",
        job:"",
        text:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:"2",
        name:"George",
        designation:"Designer",
        img:"https://i.pravatar.cc/300?img=",
        job:"",
        text:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:"3",
        name:"Alex",
        designation:"Manager",
        img:"https://i.pravatar.cc/300?img=3",
        job:"",
        text:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    

]
const Testimonial = () => {
  return (
    <div className=" py-16">
        <div className='text-center max-w-[550px] mx-auto space-y-3 pb-10'>
            <h1 className='text-4xl font-extrabold font-serif mb-2'>Words from our coustomers</h1>
            <p className='text-gray-500 text-sm max-w-[350px] mx-auto'>Bring your dream home to life with one-on-one design help & hand picked products</p>
        </div>
        <div className='bg-black flex flex-col md:flex-row gap-7 p-12 px-32'>
           { TestimonialData.map((Data)=>{
                return(
                <div key={Data.id} className=' px-5 py-10 border-[1px] border-gray-400 text-white hover:bg-white hover:text-black'>
                    <div className='flex flex-row space-x-3 border-gray-400 border-b-[1px] pb-3 '>
                        <div className=''>
                            <Image
                                alt="fff"
                                src={Data.img}
                                width={60}
                                height={60}
                                className=' rounded-full'
                            />  
                        </div>
                        <div>
                            <p className='text-sm font-bold '>{Data.name}</p>
                            <span className='text-xs text-gray-400 '>{Data.designation}</span>
                            <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <p className='text-sm text-gray-400'>{Data.text}</p> 
                    </div>
                     
                    {/* <a href={Card.link}className='capitalize inline-block  border-black border-b-[1px]'>learn more</a>  */}
                </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default Testimonial;