'use client'
import React, { useState } from "react";
import Slider from "@/components/Slider";
import { motion, AnimatePresence } from "framer-motion";
import Scrolleffect from "@/components/Scrolleffect";
import Middlecard from "@/components/Middlecard";
import Cards from "@/components/Cards";




const Page = () => {
  
  const [activeSection, setActiveSection] = useState("cards");

 
  const cards = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp",
      price: 59.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp",
      price: 79.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp",
      price: 89.99,
    },
    {
      id: 4,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp",
      price: 99.99,
    },
    {
      id: 5,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 109.99,
    },
    {
      id: 6,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp",
      price: 119.99,
    },
    {
      id: 7,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp",
      price: 129.99,
    },
    {
      id: 8,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 159.99,
    },
  ];

  const bestsellers = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp",
      price: 59.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp",
      price: 79.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp",
      price: 89.99,
    },
    {
      id: 4,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp",
      price: 99.99,
    },
  ];

  const newarrivals = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp",
      price: 119.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp",
      price: 129.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 159.99,
    },
  ];

  const hotsales = [
    {
      id: 1,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp",
      price: 89.99,
    },
    {
      id: 2,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp",
      price: 99.99,
    },
    {
      id: 3,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp",
      price: 109.99,
    },
    {
      id: 4,
      title: "Adidas Boost 2.0",
      image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp",
      price: 119.99,
    },
  ];

  const renderProducts = () => {
    switch (activeSection) {
      case "cards":
        return cards;
      case "bestsellers":
        return bestsellers;
      case "newarrivals":
        return newarrivals;
      case "hotsales":
        return hotsales;
      default:
        return bestsellers;
    }
  };

  return (
    <div>
      <Slider />



<div>
  <Scrolleffect/>
</div>
      <div >
        <Middlecard/>
      </div>

      <div className="max-w-3xl p-4 mt-8 mx-auto text-2xl font-bold flex justify-between items-center">
        <button onClick={() => setActiveSection("bestsellers")}
          className={`${
            activeSection === "bestsellers" ? "text-black" : "text-gray-400"
          }`}>Best Sellers</button>
        <button onClick={() => setActiveSection("newarrivals")}
          className={`${
            activeSection === "newarrivals" ? "text-black" : "text-gray-400"
          }`}>New Arrivals</button>
        <button onClick={() => setActiveSection("hotsales")}
          className={`${
            activeSection === "hotsales" ? "text-black" : "text-gray-400"
          }`}>Hot Sales!</button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 p-4  gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="wait">
          {renderProducts().map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.2 }}
            >

              <Cards key={product.id} pro={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page;


