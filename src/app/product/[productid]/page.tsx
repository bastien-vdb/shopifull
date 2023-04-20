// ProductDetails.ts
import { getSession } from '@/lib/auth/getNextServerSession';
import './product.css'; // Import the CSS file for styling
import ProductClient from './productClient';
import { productType } from '@/lib/types/productType';

async function ProductDetails({ params }: any) {
  const { productid: id } = params;

  const session = await getSession();

  const res = await fetch(`http://localhost:3000/api/getOne/${id}`);
  const product:productType = await res.json(); //Should be controlled by Zod or something like that to avoid errors in the future when the API changes its response type or structure

  return <ProductClient id={id} session={session} product={product} />
}

export default ProductDetails;
