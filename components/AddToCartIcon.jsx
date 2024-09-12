'use client'
import { GlobalState } from '@/Context/Context'
import React from 'react'
import { useContext } from 'react'

const AddToCartIcon = ({product}) => {

    const {addToCart} =useContext(GlobalState)

  return (

    <i onClick={()=>addToCart(product)} className="bx bx-cart bg-white p-2"/>

  )
}

export default AddToCartIcon
