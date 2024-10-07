import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/images/Logo.png";
import Button from '../Button';


const NavLink = [
    {
        id: 1,
        title: "About",
        link: "#"
    },
    {
        id: 2,
        title: "Services",
        link: "#"
    },
    {
        id: 3,
        title: "Project",
        link: "#"
    },
    {
        id: 4,
        title: "Contact",
        link: "#"
    }
];
const Navbar = () => {
  return <>
    <div className="container py-6 flex 
        justify-between items-center">
        <div className="flex items-center gap-3">
            <Image 
            src={Logo}
            alt="logo image"
            width={40} 
        />
        <span className='text-2xl font-bold'>interior</span>
            
        </div>
        <ul className="hidden lg:flex">
            {NavLink.map((link) => {
                return(
                    <a href={link.link} className="mx-4 text-base font-semibold">
                        {link.title}
                    </a>
                );
            })}
        </ul>
        <div>
            <Button 
                value='Try For Free'
                bg_color='bg-white'
                style=''
            />
            {/* <button className="border-[1px] border-black py-2 px-4 font-semibold  text-sm lg:text-base
                shadow-[5px_5px_0px_0px]">
                Try For Free
            </button> */}
        </div>

    </div>
  </>
}
export default Navbar;
