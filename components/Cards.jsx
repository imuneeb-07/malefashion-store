import React from 'react'
import Link from 'next/link'
import AddToCartIcon from './AddToCartIcon'


const Cards = ({pro}) => {


  return (
    <div className=' overflow-hidden group'>
      <div className='mb-2 relative'>
<Link href={`/products/${pro.id}`}>
<img className='w-full' src={pro.image} alt="" />

</Link>
        <div className='absolute gap-2 top-0 right-0 p-1 translate-x-[150%] group-hover:translate-x-0 transition-all duration-700 flex flex-col m-1 text-xl'>
          <i className="bx bx-heart bg-white p-2 "/>
        <AddToCartIcon product={pro}/>
        </div>
      </div>
      <div className='mb-3'>
        <h3 className=' text-lg '>{pro.title}</h3>
<div className='py-1'>
    <i className="bx text-orange-600 bxs-star"></i>
    <i className="bx text-orange-600  bxs-star"></i>
    <i className="bx text-orange-600  bxs-star"></i>
    <i className="bx bx-star"></i>
</div>
<p className='font-bold' >${pro.price}</p>
<div>

</div>
      </div>
    </div>
  )
}

export default Cards
