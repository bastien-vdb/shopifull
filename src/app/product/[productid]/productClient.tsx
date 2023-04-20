// ProductDetails.js
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './product.css'; // Import the CSS file for styling
import type { productType } from '@/lib/types/productType';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';

function ProductClient({ id, session, product }: { id: any, session: any, product: productType }) {

  const router = useRouter();

  const {addToCart} = useCart();

  if (!session) router.push('http://localhost:3000/api/auth/signin?error=SessionRequired&callbackUrl');

  return (
    <div className="product-details-container relative">
      <button onClick={() => router.back()} className='text-6xl font-bold'>←</button>
      <div className="product-details-image">
        <Image src={product?.image} width={1000} height={1000} alt={product?.title} />
      </div>
      <div className="product-details-info">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-description">
          {product.title}
        </p>
        <div className="product-details-price-container">
          <h2 className="product-details-price">${product?.price}</h2>
          <button onClick={()=>addToCart(product)} className="product-details-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductClient;


