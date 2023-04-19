import React from "react";
import Image, { StaticImageData } from "next/image";
import "./ProductCard.css"; // Import CSS file for styling
import Link from "next/link";
import type { productType } from "@/lib/types/productType";
import { useCart } from "@/hooks/useCart";

type ProductCardProps = productType;

const ProductCard = ({ title, price, image, id }: ProductCardProps) => {

  const {addToCart} = useCart();
  const handleAddToCart = ()=> {
    addToCart({title, price, image, id});
  }
  return (
    <div className="product-card relative">
      <Image src={image} width={1000} height={1000} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <Link href={`/product/${id}`} className="btn">
        View Details
      </Link>
      <button onClick={handleAddToCart}
        className="addBtn bg-green-500 hover:bg-green-700 duration-1000 text-white font-bold text-xl rounded-full p-2 px-4 mx-2 absolute right-0"
      >
        <span className="text-center inline-flex justify-center items-center w-full h-full">
          +
        </span>
      </button>
    </div>
  );
};

export default ProductCard;