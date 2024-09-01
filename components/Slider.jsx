"use client";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentInd, setCurrentInd] = useState(0);
 
  const [showText,setText ] =useState(true)
 
 
  const slides = [
    {
      url: "https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp",
    },
    {
      url: "https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp",
    },
  ];

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, [slides]);

  const prevSlide = () => {
    const isFirstSlide = currentInd === 0;
    const newInd = isFirstSlide ? slides.length - 1 : currentInd - 1;
    setCurrentInd(newInd);
    setText(false),
    setTimeout(()=>{
      setText(true)
    },1000)
  };

  const nextSlide = () => {
    const isLastSlide = currentInd === slides.length - 1;
    const newInd = isLastSlide ? 0 : currentInd + 1;
    setCurrentInd(newInd);
    setText(false),
    setTimeout(()=>{
      setText(true)
    },1000)
  };

  return (
    <div className="relative overflow-hidden h-[800px]">
      <div
        style={{
          backgroundImage: `url(${slides[currentInd].url})`,
          transition: "background-image 1s ease-in-out",
        }}
        className="absolute bg-cover h-full w-full bg-center"
      ></div>
      {showText && 
      <div className="absolute top-[30%] left-24 max-w-[380px] transition-all duration-200  animate-textup">
      <h6 className="text-red-600">SUMMER COLLECTION</h6>
      <h2 className="text-5xl mt-4 font-bold">Summer Collections 2024</h2>
      <p className="mt-4">
        A specialist label creating luxury essentials. Ethically crafted with
        an unwavering commitment to exceptional quality.
      </p>
      <button className="bg-black text-white py-2 px-6 text-lg mt-4">Shop Now</button>
    </div>
      }
      {/* LEFTARROW */}
      <div className="z-20">
        <i
          onClick={prevSlide}
          className="bx bx-chevron-left text-5xl absolute top-[40%] left-5 rounded-full p-2 hover:bg-white transition-all duration-500 cursor-pointer"
        ></i>
      </div>

      {/* RIGHTARROW */}
      <div className="z-20">
        <i
          onClick={nextSlide}
          className="bx bx-chevron-right text-5xl absolute top-[40%] right-5 rounded-full p-2 hover:bg-white transition-all duration-500 cursor-pointer"
        ></i>
      </div>
      {/* <div className="absolute bottom-[30%]">
        <i className="bx  bx-facebook"></i>
      </div> */}
    </div>
  );
};

export default Slider;
