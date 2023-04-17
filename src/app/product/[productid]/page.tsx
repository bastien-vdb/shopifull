// ProductDetails.js
'use client';
import React from 'react';
import Image from 'next/image';
import product1Image from '../../../images/product1.jpg'; // Import the product image
import './product.css'; // Import the CSS file for styling

import { useSession, signIn, signOut } from "next-auth/react";

function ProductDetails() {

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <Image src={product1Image} alt="Product 1" />
      </div>
      <div className="product-details-info">
        <h1 className="product-details-title">Product 1</h1>
        <p className="product-details-description">
          This is a detailed description of Product 1. It includes information
          about the product features, specifications, and other details.
        </p>
        <div className="product-details-price-container">
          <h2 className="product-details-price">$99.99</h2>
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

export default ProductDetails;
