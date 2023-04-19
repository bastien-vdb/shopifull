// ProductDetails.js
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import product1Image from '../../../images/product1.jpg'; // Import the product image
import './product.css'; // Import the CSS file for styling
import type { productType } from '@/lib/types/productType';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

function ProductClient({ id, session }: { id: any, session: any }) {
  const [product, setProduct] = useState<productType | null>(null);

  const router = useRouter();

  const fetching = async () => {
    fetch(`http://localhost:3000/api/getOne/${id}`).then(res => res.json()).then(res => setProduct(res));
  }
  useEffect(() => {
    fetching();
  }, [])

  if (!session) router.push('http://localhost:3000/api/auth/signin?error=SessionRequired&callbackUrl');

  return (
    <div className="product-details-container relative">
      <button onClick={() => router.back()} className='text-6xl font-bold'>←</button>
      <div className="product-details-image">
        <Image src={product?.image} width={1000} height={1000} alt="Product 1" />
      </div>
      <div className="product-details-info">
        <h1 className="product-details-title">{product?.title}</h1>
        <p className="product-details-description">
          This is a detailed description of Product 1. It includes information
          about the product features, specifications, and other details.
        </p>
        <div className="product-details-price-container">
          <h2 className="product-details-price">${product?.price}</h2>
          <button className="product-details-add-to-cart">Add to Cart</button>
        </div>
        <div className="product-details-options-container">
          <label className="product-details-option-label">Color:</label>
          <select className="product-details-option-select">
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
          </select>
          <label className="product-details-option-label">Size:</label>
          <select className="product-details-option-select">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductClient;
