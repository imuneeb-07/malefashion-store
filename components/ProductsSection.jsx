'use client'; // This is a client component

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "./Cards";

const ProductsSection = ({ cards, bestsellers, newarrivals, hotsales }) => {
  const [activeSection, setActiveSection] = useState("cards");

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
      <div className="max-w-3xl p-4 mt-8 mx-auto text-2xl font-bold flex justify-between items-center">
        <button
          onClick={() => setActiveSection("bestsellers")}
          className={`${
            activeSection === "bestsellers" ? "text-black" : "text-gray-400"
          }`}
        >
          Best Sellers
        </button>
        <button
          onClick={() => setActiveSection("newarrivals")}
          className={`${
            activeSection === "newarrivals" ? "text-black" : "text-gray-400"
          }`}
        >
          New Arrivals
        </button>
        <button
          onClick={() => setActiveSection("hotsales")}
          className={`${
            activeSection === "hotsales" ? "text-black" : "text-gray-400"
          }`}
        >
          Hot Sales!
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 p-4 gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {renderProducts().map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}

            >
              <Cards key={product.id} pro={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsSection;
