import React from 'react';

interface Props {
    value: string;
    shadow: string; 
    bg_color: string;
    text_color: string;
}

const Button = ({value, shadow, bg_color, text_color}:Props) => {
  return (
    <button className={`border-[1px] border-black py-2 px-4 font-semibold  text-sm lg:text-base
        ${shadow}
        ${bg_color}
        ${text_color}
        `}>
        {value}
    </button>
  )
}

export default Button;