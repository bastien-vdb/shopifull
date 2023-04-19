// ProductDetails.ts
import { getSession } from '@/lib/auth/getNextServerSession';
import './product.css'; // Import the CSS file for styling
import ProductClient from './productClient';

async function ProductDetails({ params }: any) {
  const { productid: id } = params;

  const session = await getSession();

return <ProductClient id={id} session={session} />
}

export default ProductDetails;
