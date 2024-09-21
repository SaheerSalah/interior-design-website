import React from 'react';
import { FaVectorSquare } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { MdMonetizationOn } from "react-icons/md";

const ServicesCard = [
    {
        id: 1,
        title: "Luxury Facilities",
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <FaVectorSquare />,
        link: "#"
    },
    {
        id: 2,
        title: "Quality Products",
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <BsPencilSquare />,
        link: "#"
    },
    {
        id: 3,
        title: "Affordable Price",
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <MdMonetizationOn />,
        link: "#"
    },

];

const Services = () => {
  return (
    <div className="container py-16">
        <div className='flex flex-col gap-7'>
            <div className='text-center max-w-[350px] mx-auto'>
                <h2 className='text-3xl font-bold font-serif mb-2'>What we provide</h2>
                <p className='text-gray-500 text-sm'>Bring your dream home to life with one-on-one design help & hand picked products</p>
            </div>
            <div className='grid grid-flow-row md:grid-flow-col gap-5 '>
                {ServicesCard.map((Card)=>{
                    return(
                        <div key={Card.id} className=' p-7 border-[1px] border-gray-400 py-11 lg:text-base
                            "text-black  bg-white hover:bg-black hover:text-white hover:shadow-[5px_5px_0px_0px_#6b7280] space-y-5 duration-300'>
                            <span className='text-2xl border-[1px] border-black rounded-full p-3 inline-block'>{Card.icon}</span>
                            <h3 className='text-2xl font-semibold font-serif'>{Card.title}</h3>
                            <p className='text-xs text-gray-400'>{Card.discription}</p> 
                            <a href={Card.link}className='capitalize inline-block  border-black border-b-[1px]'>learn more</a> 
                        </div>
                    )
                })}
            </div>
        </div>
    </div>  
)
}

export default Services;


{/* <Card 
                    image_src={user}
                    name='Luxury Facilities'
                    discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur'
                />
                <Card 
                    image_src={user}
                    name='Quality Products'
                    discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur'
                />
                <Card
                    image_src={user} 
                    name='Affordable Price'
                    discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur'
                /> */}