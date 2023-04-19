'use client';
import { SessionProvider } from "next-auth/react"
import { CartProvider } from '@/hooks/useCart';

function Provider({ children }: any) {
    return (
        <SessionProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </SessionProvider >
    );
}

export default Provider;