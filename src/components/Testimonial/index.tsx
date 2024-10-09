"use client";
import Image from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/animation/animate";

const TestimonialData = [
  {
    id: "1",
    name: "John Doe",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=1",
    job: "",
    delay: 0.2,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    name: "George",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=2",
    job: "",
    delay: 0.4,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Alex",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    job: "",
    delay: 0.6,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Testimonial = () => {
  return (
    <div className=" py-16 ">
      <div className="text-center max-w-[550px] mx-auto space-y-3 mb-10">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-extrabold font-serif mb-2"
        >
          Words from our coustomers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>
      {/* flex flex-col md:flex-row */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-7 ">
          {TestimonialData.map((Data) => {
            return (
              <motion.div
                variants={SlideLeft(Data.delay)}
                initial="initial"
                whileInView="animate"
                key={Data.id}
                className=" px-5 py-10 border-[1px] border-gray-400 text-white hover:bg-white hover:text-black group duration-300"
              >
                <div className="flex flex-row gap-3 border-gray-400 border-b-[1px] pb-3 ">
                  <div className="">
                    <Image
                      alt="personal image"
                      src={Data.img}
                      width={60}
                      height={60}
                      className=" rounded-full"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-bold ">{Data.name}</p>
                    <span className="group-hover:text-black text-xs text-gray-500 ">
                      {Data.designation}
                    </span>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="group-hover:text-black text-sm text-gray-400">
                    {Data.text}
                  </p>
                </div>

                {/* <a href={Card.link}className='capitalize inline-block  border-black border-b-[1px]'>learn more</a>  */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
