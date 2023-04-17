import React from "react";
import Image from "next/image";
import "./ProductCard.css"; // Import CSS file for styling
import { useSession } from "next-auth/react";

type ProductCardProps = {
  title: string,
  price: number,
  image: string,
  link: string
}

const ProductCard = ({ title, price, image, link }: ProductCardProps) => {

  return (
    <div className="product-card">
      <Image src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <a href='/' className="btn">
        View Details
      </a>
    </div>
  );
};

export default ProductCard;