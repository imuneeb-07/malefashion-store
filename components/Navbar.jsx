'use client'
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {

    const [open,setOpen] = useState(false)

    // Function to toggle mobile menu
  const toggleMenu = () => {
    const newOpen = !open

    setOpen(newOpen)

    // Toggle body scroll based on menu open/close
    document.body.style.overflow = newOpen ? "hidden" : ""; // Enable or disable scrolling
  };
  return (
    <div className="bg-white backdrop-blur-md border-2 sticky  top-0 shadow-md z-50  "> 
      <nav className="max-w-6xl p-4 mx-auto flex justify-between items-center">
        <div>
          <img
            src="
            https://preview.colorlib.com/theme/malefashion/img/logo.png.webp"
            alt=""
          />
        </div>

        <ul className="hidden md:block">
            <li>
                <Link className="px-4 py-3  text-xl" href="/">Home</Link>
                <Link className="px-4 py-3  text-xl" href="/">About</Link>
                <Link className="px-4 py-3  text-xl" href="/">Contact</Link>
            </li>
        </ul>

        <div className="hidden md:block ">
            <i className="bx p-4 cursor-pointer  text-xl bx-search  "/>
            <i className="bx p-4 cursor-pointer text-xl bx-heart "/>
            <i className="bx p-4 cursor-pointer text-xl bx-cart "/>
        </div>


    {/* mobile navbar */}

        <div className= {`absolute p-2 ${ open ? "" : "-translate-x-[100%]"} transition-all duration-1000 md:hidden top-0 border-2 h-screen w-1/2 left-0 bg-white`}>

        <div className="flex  items-center justify-around">
            <i className="bx p-2 cursor-pointer text-xl bx-search  "/>
            <i className="bx p-2 cursor-pointer text-xl bx-heart "/>
            <i className="bx p-2 cursor-pointer text-xl bx-cart "/>
        </div>

            <ul className="p-2 text-center">
                <li>
                    <Link className="text-xl p-3 block" href="/">Home</Link>
                    <Link className="text-xl p-3 block" href="/">About</Link>
                    <Link className="text-xl p-3 block " href="/">Contact</Link>
                </li>
            </ul>
        </div>

        <div className="block  md:hidden">
            <i  onClick={toggleMenu} className={`bx cursor-pointer  text-3xl p-3 bx-${ open ? "x" : "menu"}`}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
