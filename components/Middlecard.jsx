import React from 'react';

const Middlecard = () => {
  return (
    <div className='max-w-6xl p-4 mx-auto mt-16 flex flex-col space-y-8'>
      <div className='relative flex flex-col md:flex-row-reverse items-center'>
        <img
          src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-1.jpg.webp"
          alt=""
          className='w-full md:w-1/2 md:ml-[-10%]'
        />
        <div className='text-center z-10 max-w-[300px] md:text-left md:w-1/2 p-4'>
          <h2 className='text-3xl  font-bold'>Clothing Collections 2030</h2>
          <button className='mt-2 px-6 py-2  text-black relative group'>
            SHOP NOW
            <span className='block mt-2 h-[2px] w-full bg-black absolute bottom-[-6px] left-0 group-hover:bg-orange-500 group-hover:w-1/2 transition-all duration-300 ease-in-out'></span>
          </button>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row items-center'>
        <img
          src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-2.jpg.webp"
          alt=""
          className='w-full md:w-1/2 md:mr-[-10%]'
        />
        <div className='text-center max-w-[300px] md:text-left md:w-1/2 p-4'>
          <h2 className='text-3xl font-bold'>Clothing Collections 2030</h2>
          <button className='mt-2 px-6 py-2  text-black relative group'>
            SHOP NOW
            <span className='block mt-2 h-[2px] w-full bg-black absolute bottom-[-6px] text-center left-0  group-hover:bg-orange-500 group-hover:w-1/2 transition-all duration-300 ease-in-out'></span>
          </button>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row-reverse items-center'>
        <img
          src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-3.jpg.webp"
          alt=""
          className='w-full md:w-1/2 md:ml-[-10%]'
        />
        <div className='text-center z-10 max-w-[300px] md:text-left md:w-1/2 p-4'>
          <h2 className='text-3xl font-bold'>Clothing Collections 2030</h2>
          <button className='mt-2 px-6 py-2  text-black relative group'>
            SHOP NOW
            <span className='block mt-2 h-[2px] w-full bg-black absolute bottom-[-6px] left-0 group-hover:bg-orange-500 group-hover:w-1/2 transition-all duration-300 ease-in-out'></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Middlecard;
