"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalState = createContext();

const Context = ({ children }) => {
  var [cart,setCart] = useState({
    cartItems: [],
    cartTotal: 0,
    totalItems:0
  });

  const addToCart = (item) => {
    var cartCopy = cart.cartItems;

    var existedItem = cartCopy.filter(v => v.id == item.id);

    if (existedItem.length) {
       cartCopy = cartCopy.map(v =>{
        if (v.id == item.id) {
          v.quantity = v.quantity + 1;
          v.total = Math.round(v.quantity * v.price)
        }
        return v
      } );
    } else {
      cartCopy.push({ ...item, quantity: 1,total:Math.round(item.price)});
    }

   var total = 0
   cartCopy.forEach((v)=>{
    total = total + v.total
   })


var totalItems = 0
cartCopy.forEach(v => {
  totalItems = totalItems + v.quantity 
});
 

  window.localStorage.setItem("cart",JSON.stringify({ cartItems : cartCopy,cartTotal:total,totalItems}))
    setCart({ cartItems : cartCopy,cartTotal:total ,totalItems});
  };
 

  useEffect(()=>{
    if (window.localStorage.cart) {
   
    setCart(JSON.parse(window.localStorage.cart)
  )
    }
  },[])

  return (
    <GlobalState.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </GlobalState.Provider>
  );
};

export default Context;
