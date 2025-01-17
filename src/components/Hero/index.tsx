"use client";
import React from "react";
import Image from "next/image";
import hero from "../../../public/assets/images/hero.png";
import Button from "../Button";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "@/animation/animate";

const Hero = () => {
  return (
    <>
      <div className="container md:py-16 py-4 md:pt-7 lg:pt-10 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:min-h-[500px] ">
          <div
            className=" flex flex-col justify-center gap-6 
                text-center md:text-left px-10 md:pr-0 lg:pr-10 xl:pr-44 pt-5 :pt-0 "
          >
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif"
            >
              SKETCH LUXURY INTERIOR DESIGN
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-gray-500 text-sm leading-loose"
            >
              Bring your dream to life with one-on-one design help & hand picked
              products tailored to your style, space and budget.
            </motion.p>
            {/* space-x-0 */}
            <div className="sm:space-x-4 space-x-1 space-y-2">
              <Button
                value="Get started"
                bg_color="bg-black"
                style="uppercase "
                delay={0.8}
              />
              <Button
                value="Contact Us"
                bg_color="bg-white"
                style="uppercase "
                delay={1.1}
              />
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.5)}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center items-center"
          >
            <Image
              src={hero}
              alt="hero image"
              className="object-cover w-[80%] md:w-[100%]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
