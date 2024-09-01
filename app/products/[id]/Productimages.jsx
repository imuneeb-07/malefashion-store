'use client'
import React, { useState } from 'react'


const Productimages = ({url}) => {

const [selectedImage,setSelectedImg] =useState(url)
  return (

    <div>
      <img className='w-full' src={selectedImage} alt="" />
{/* Images section */}
<div className='grid grid-cols-4 gap-4  my-4'>
    <div className=''>
        <img onClick={()=>setSelectedImg("https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp")} src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp" alt="" />
    </div>
    <div>
        <img onClick={()=>setSelectedImg("https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp")} src="https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp" alt="" />
    </div>
    <div>
        <img onClick={()=>setSelectedImg("https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp")} src="https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp" alt="" />
    </div>
    <div>
        <img onClick={()=>setSelectedImg("https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp")} src="https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp" alt="" />
    </div>
    </div> 
    </div>
  )
}

export default Productimages
