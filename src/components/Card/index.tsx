import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image_src: string;
  discription: string;
}
const Card = ({ name, image_src, discription }: Props) => {
  return (
    <div
      className=' p-7 border-[1px] border-black py-11 lg:text-base
        "text-black  bg-white  shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white hover:shadow-[5px_5px_0px_0px_#6b7280]'
    >
      <div className="flex flex-col gap-5">
        <Image src={image_src} alt="ss" width={30} height={30} />
        <h3 className="text-2xl font-semibold font-serif">{name}</h3>
        <p className="text-xs text-gray-500">{discription}</p>
        <a href="/#" className="capitalize">
          learn more
        </a>
      </div>
    </div>
  );
};

export default Card;
