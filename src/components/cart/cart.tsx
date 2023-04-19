'use client';
import { useCart } from '@/hooks/useCart';
import './cart.css';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const { cart, cartCount } = useCart();
    const router = useRouter();

    return (
        <div className='cart'>
            <button onClick={() => (router.push('/cartpage'))}>
                <i className="fas fa-shopping-cart"></i>
                <span className='itemCount'>{cartCount}</span>
            </button>
        </div>
    );
};

export default Cart;
