'use client'
import { GlobalState } from '@/Context/Context'
import React, { useState } from 'react'
import { useContext } from 'react'

const Quantity = ({product}) => {

const {addToCart} = useContext(GlobalState)

    const [q,setQ] =useState(0)

  return (
    <div>
    
<div className='mt-3'>
    <button onClick={()=>setQ(q-1)} disabled={q==0} className='border-gray-400 disabled:cursor-not-allowed border text-xl p-2 bg-gray-200'>-</button>
    <span className='text-2xl p-2 '>{q}</span>
    <button onClick={()=>setQ(q+1)} className='border-gray-400 border text-xl p-2 bg-gray-200'>+</button>
    <button onClick={()=>addToCart(product)} className=' mx-6 border-2 text-lg  bg-black text-white py-2 px-2'>Add To Cart</button>
</div>

    </div>
  )
}

export default Quantity
