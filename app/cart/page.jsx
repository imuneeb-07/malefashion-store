"use client";
import { GlobalState } from "@/Context/Context";
import React, { useContext } from "react";

const Page = () => {
  const { cart,addToCart,removeItemFromCart } = useContext(GlobalState);

  return (
    <div>
      <div className=" max-w-6xl  mt-8 mx-auto p-4 grid grid-cols-3 gap-4">
        {/* cart products */}
        <div className="  col-span-3 md:col-span-2 ">
          <table className="  w-full ">
            <thead className="border-b ">
              <tr className="">
                <th className="text-left p-4">Products</th>
                <th className="text-left p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="  ">
              {cart.cartItems.map((v, i) => {
                return (
                  <tr className=" border-b">
                    <td className="p-4">
                      <div className="grid grid-cols-4 gap-3 items-center  ">
                        <div className=" border  col-span-2 md:col-span-1">
                          <img className=" w-full"
                            src={v.image}
                            alt=""
                          />
                        </div>
                        <div className="col-span-2 md:col-span-3 pr-3">
                          <h2>{v.title}</h2>
                          <span>${v.price}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="text-left text-xl ">
                        <button onClick={()=>removeItemFromCart(v)}>-</button>
                        <span className="px-2">{v.quantity}</span>
                        <button onClick={()=>addToCart(v)}>+</button>
                      </div>
                    </td>

                    <td className="text-center px-4">${v.total}</td>

                    <td className="p-3">
                      <div className="text-center px-8 font-bold">
                        <i className="bx bx-x bg-gray-200 text-2xl hover:bg-gray-300  p-2  rounded-full"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Checkout */}

        <div className="    col-span-3  md:col-span-1 ">
          <div className="p-4 bg-gray-100 ">
            <h4 className="text-xl font-bold ">Cart Total</h4>
            <div className="py-6 ">
              <div className="flex justify-between items-center">
                <p className="py-2 ">Subtotal</p>
                <span>${cart.cartTotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="py-2 ">Tax</p>
                <span>$0</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="py-2 ">Shipping Charges</p>
                <span>$0</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="py-2 ">Total</p>
                <span>${cart.cartTotal}</span>
              </div>
            </div>
            <div className="text-lg bg-red-600 text-center text-white p-1 ">
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
