"use client";
import React from "react";
import Image from "next/image";
import banner2 from "../../../public/assets/images/banner2.png";
import Button from "../Button";
import { animate, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/animation/animate";

const Banner2 = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
        <div
          className=" flex flex-col justify-center gap-6
                     md:text-left  "
        >
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif "
          >
            Simple way to make stylish living room
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-loose"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam adipisicing elit. Suscipit earum
            accusantium tempore nam aliquid.
          </motion.p>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="flex flex-row gap-6"
          >
            <div className="max-w-16 space-y-2">
              <p className="text-3xl font-bold font-serif">15</p>
              <p className="text-gray-500 text-sm leading-6">
                Years of Experience
              </p>
            </div>
            <div className="max-w-16 space-y-2">
              <p className="text-3xl font-bold font-serif">350</p>
              <p className="text-gray-500 text-sm leading-6">Happy Clients</p>
            </div>
            <div className="max-w-16 space-y-2">
              <p className="text-3xl font-bold font-serif">34</p>
              <p className="text-gray-500 text-sm leading-6">Award Gained</p>
            </div>
          </motion.div>
          <motion.div
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
          >
            <Button value="Contact Us" bg_color="bg-black" style="" />
          </motion.div>
        </div>
        <motion.div
          variants={SlideLeft(0.5)}
          initial="initial"
          whileInView="animate"
          className="flex flex-col justify-center "
        >
          <Image src={banner2} alt="Banner" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner2;
