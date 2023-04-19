'use client';
import Image from "next/image";
import ProductCard from "../components/productCard/ProductCard";

import bannerImage from "../images/banner.jpg";
import { useEffect, useState } from "react";
import type { productType } from "@/lib/types/productType";

const HomePage = () => {

    const [products, setProducts] = useState<any>((null));
    useEffect(() => {
        fetch('http://localhost:3000/api/get')
            .then(res => res.json())
            .then(res => setProducts(res));
    }, []);

    return (
        <div>
            <div className="banner">
                <Image src={bannerImage} alt="Banner" className="banner-image" />
                <div className="banner-text">
                    <h1 className="banner-title">Welcome to our Online Store</h1>
                    <p className="banner-subtitle">
                        Discover amazing products for all your needs
                    </p>
                </div>
            </div>
            <div className="featured-products">
                <h2 className="section-title">Featured Products</h2>
                <div className="product-list">
                    {products && products.map((product: productType) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;