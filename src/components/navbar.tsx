"use client";
import { Car, Menu, Plane, PlaneTakeoff, Shield, Truck } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import Mobile from "./mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full text-gray-500 fixed top-0 p-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md " : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-10">
            <div className="cursor-pointer">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="NasNG"
                  width={100}
                  height={50}
                />
              </Link>
            </div>
            <ul className="hidden lg:flex text-white  items-center gap-3 font-semibold  ">
              <li className="px-3 relative group ">
                <Link href="/residential" className="flex gap-2 text-gray-400">
                  <Car className="size-6  animate-out" /> <span>CAR HIRE</span>
                </Link>
                <span className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="px-3 relative group">
                <Link href="/roam" className="flex gap-2 text-gray-400">
                  <PlaneTakeoff className="size-5 " /> <span>AIR TRAVEL</span>
                </Link>
                <span className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="px-3 relative group">
                <Link
                  href="/roam"
                  className="flex gap-2  items-center text-gray-400"
                >
                  <FaShieldAlt className="size-5" />
                  <span>PROTOCOL + SECURITY SERVICES</span>
                </Link>
                <span className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="px-3 relative group">
                <Link
                  href="/roam"
                  className=" gap-2 flex items-center text-gray-400"
                >
                  <Truck className="size-5" /> <span>LOGISTICS</span>
                </Link>
                <span className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex  text-white items-center gap-3 font-semibold divide-x divide-gray-400">
              <li className="relative pr-3 text-gray-400 group">
                <Link href="/business">BUSINESS</Link>
                <span className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-gray-400 relative group">
                <Link href="/personal">PERSONAL</Link>
                <span className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>

            <div className="relative aspect-square"></div>

            <Mobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
