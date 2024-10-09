"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/images/Logo.png";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import { animate, motion } from "framer-motion";
import { SlideLeft } from "@/animation/animate";

const Footer = () => {
  return (
    <div className="container py-11">
      <motion.div
        variants={SlideLeft(0.5)}
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-1 md:grid-cols-2  gap-8 border-b-2 border-gray-200 pb-5"
      >
        <div className="space-y-4 font-medium text-base">
          <div className="flex space-x-3 items-center">
            <Image src={Logo} alt="logo img" width={25} />
            <p className=" text-lg font-bold ">Interior</p>
          </div>
          <p>Greater Gaza , Palestine</p>
          <p>@ 2024 saheer's All rights reserved</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
          <div className="space-y-4">
            <p className="text-xl font-semibold">About us</p>
            <ul className="text-sm space-y-4">
              <li>
                <Link href="/">Our Story</Link>
              </li>
              <li>
                <Link href="/">Designer</Link>
              </li>
              <li>
                <Link href="/">Craftmanship</Link>
              </li>
              <li>
                <Link href="/">Sustainability</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-semibold">Support</p>
            <ul className="text-sm space-y-4">
              <li>
                <Link href="/">FAQ's</Link>
              </li>
              <li>
                <Link href="/">Designer</Link>
              </li>
              <li>
                <Link href="/">Care Guide</Link>
              </li>
              <li>
                <Link href="/">Guaranty</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-semibold">Contact us</p>
            <ul className="text-sm space-y-4">
              <li>
                <Link href="/" className="flex items-center gap-2 font-bold">
                  <FaPhoneAlt /> +972 598430000
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center gap-2 font-bold">
                  <MdSms /> Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="font-bold text-sm text-center mt-6 ">
        &copy; 2023 saheer's All rights reserved
      </div>
    </div>
  );
};

export default Footer;
