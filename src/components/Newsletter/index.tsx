"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/animation/animate";

const Newsletter = () => {
  return (
    <div className="container  md:p-10">
      <div className="text-center max-w-[500px] mx-auto space-y-5 by-14 ">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-3xl font-bold font-serif mb-2"
        >
          Subsribe to our Newsletter
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[300px] mx-auto"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero
          doloremque ab eum!
        </motion.p>
        <motion.div
          variants={SlideUp(0.8)}
          initial="initial"
          whileInView="animate"
          className="flex flex-row  justify-center !mt-10"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="ring-1 ring-gray-300 p-2 px-4 max-w-56"
          />
          <button className="bg-black text-white py-4 px-6 uppercase">
            Subscribe
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
