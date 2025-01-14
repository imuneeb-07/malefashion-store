const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation:{
        textup:'textup 0.5s ease-out forwards',
        scroll: 'scroll 20s linear infinite',  // Add the scroll animation
      },
      keyframes:{
        textup:{
          '0%':{
            opacity:0,
            transform:"translateY(50px)",
          },
          '100%':{
            opacity:1,
            transform:"translateY(0)",
          }
        },
        scroll: {  // Add the scroll keyframes
          '0%': {
            transform:"translateX(0)" ,
          },
          "100%" :{
            transform: "translateX(-100%)",
          },
        
        },
      },
    },
  },
 
  plugins: [],
};
