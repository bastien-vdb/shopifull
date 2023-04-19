'use client';
import React from "react";
import Image from "next/image";

import cartIcon from "../../../public/images/cart.png";
import { useCart } from "@/hooks/useCart";
import "./cartpage.css";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();
  const { cart, cartCount, removeToCart } = useCart();

  return (
    <div className="cart-container">
      <button onClick={() => router.back()} className='text-6xl font-bold'>←</button>
      <div className="cart-header">
        <h1 className="text-bold text-4xl">Cart</h1>
        <div className="cart-icon-container">
          <Image src={cartIcon} alt="Cart" width={30} height={30} />
          <span className="cart-count font-bold text-xl text-pink-500">{cartCount}</span>
        </div>
      </div>
      <div className="cart-content">

        {cart.map(product => (
          <div key={product.id} className="cart-item">
            <div className="cart-item-image">
              <Image src={product.image} alt={product.title} width={100} height={100} />
            </div>
            <div className="cart-item-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="cart-item-quantity">
                <button>-</button>
                <span>Qty:<span className="text-green-400"> {product.qty}</span></span>
                <button>+</button>
              </div>
              <button onClick={()=>removeToCart(product.id)} className="remove-btn">Remove</button>
            </div>
          </div>
        ))}

      </div>
      <div className="cart-footer">
        <div className="cart-subtotal">
          <p>Subtotal:</p>
          <p>$30.00</p>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
