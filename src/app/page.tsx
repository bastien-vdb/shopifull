import { productType } from "@/lib/types/productType";
import "./Home.css";
import HomePage from "@/app/HomeComponent";

async function Home() {

  const res = await fetch(`http://localhost:3000/api/getAll`);
  const products:productType[] = await res.json(); //Should be controlled by Zod or something like that to avoid errors in the future when the API changes its response type or structure

  return <HomePage products={products}/>;
}

export default Home;