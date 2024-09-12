import React from 'react'
import Productimages from './Productimages'
import Quantity from './Quantity'



const page = (props) => {

  const products = [
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

var id = props.params.id


const selectedPro = products.filter(v=>{
  return v.id == id
})
  return (
    <div className='p-8 max-w-6xl gap-16 mx-auto grid grid-cols-1 sm:grid-cols-2 '>
   <div>
<Productimages url={selectedPro[0].image}/>
</div>
    
{/* Details Section*/}
    <div className=''>
<p className='text-2xl font-bold '>{selectedPro[0].title}</p>
<div className='mt-4'>
    <strike >Rs 2000</strike>
    <span className='px-2 text-2xl text-red-500 font-bold '>Rs {selectedPro[0].price}</span>
</div>

<Quantity product={selectedPro[0]}/>

    </div> 
    </div>
  )
}

export default page
