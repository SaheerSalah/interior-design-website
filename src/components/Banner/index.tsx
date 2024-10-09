"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../public/assets/images/banner.png";
import Button from "../Button";
import { animate, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/animation/animate";

const Banner = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col justify-center "
        >
          <Image alt="banner image" src={banner} className="w-full" />
        </motion.div>
        {/* px-10 md:pr-0 lg:pr-10 xl:pr-44 pt-5 :pt-0 */}
        <div className=" flex flex-col justify-center gap-6 ">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif "
          >
            We Believe that a team makes any project better
          </motion.h1>
          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-loose"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam aliquid.
          </motion.p>
          <motion.div
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
          >
            <Button value="Discover Now" bg_color="bg-black" style="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
