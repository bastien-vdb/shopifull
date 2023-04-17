import "./Home.css";
import Image from "next/image";
import ProductCard from "../components/productCard/ProductCard";

import bannerImage from "../images/banner.jpg";
import product1Image from "../images/product1.jpg";
import product2Image from "../images/product2.jpg";
import product3Image from "../images/product3.jpg";

function Home() {
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
          <ProductCard
            title="Product 1"
            price="$99.99"
            image={product1Image}
            link="/products/1"
          />
          <ProductCard
            title="Product 2"
            price="$149.99"
            image={product2Image}
            link="/products/2"
          />
          <ProductCard
            title="Product 3"
            price="$199.99"
            image={product3Image}
            link="/products/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
