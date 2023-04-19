'use client';
import React, { useState, createContext, PropsWithChildren, useContext, useEffect } from 'react';
import type { productType } from "@/lib/types/productType";

type productTypeForCart = productType & { qty: number };

type cartContextProps = {
    cart: productTypeForCart[];
    addToCart: ({ title, price, image, id }: productTypeForCart) => void;
    removeToCart: (id: string) => void;
    cartCount: number;
}

const CartContext = createContext<cartContextProps>({
    cart: [],
    addToCart: ({ title, price, image, id }) => { },
    cartCount: 0,
    removeToCart: (id) => { },
});

export function CartProvider({ children }: PropsWithChildren) {
    const [cart, setCart] = useState<productTypeForCart[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);

    const addToCart = ({ title, price, image, id }: productTypeForCart) => {
        const cartCopy = cart.slice();
        const materialAlreadyAdded = cartCopy.filter(prev => prev.id === id);

        if (materialAlreadyAdded.length > 0) {
            const newCart = cartCopy.filter(prev => prev.id !== id);
            const newProduct = { ...materialAlreadyAdded[0], qty: materialAlreadyAdded[0].qty + 1 };
            setCart([...newCart, newProduct]);
            return;
        }
        const newProduct = { title, price, image, id, qty: 1 }
        setCart((newCart) => [...newCart, newProduct]);
    }

    const removeToCart = (id: string) => {
        const cartCopy = cart.slice(); //copy
        const newCart = cartCopy.filter((prev: productTypeForCart) => prev.id !== id);
        setCart(newCart);
    }

    useEffect(() => {
        const getAllQty = cart.map((prev: productTypeForCart) => prev.qty);
        const newCount = getAllQty.reduce((acc, curr)=>acc+curr, 0)
        setCartCount(newCount);
    }, [cart]);

    return (<CartContext.Provider value={{ cart, addToCart, cartCount, removeToCart }}>
        {children}
    </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);