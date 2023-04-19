'use client';
import React, { useState, createContext, PropsWithChildren, useContext, useEffect } from 'react';
import type { productType } from "@/lib/types/productType";

type cartContextProps = {
    cart: productType[];
    addToCart: ({ title, price, image, id }: productType) => void;
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
    const [cart, setCart] = useState<productType[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);

    const addToCart = ({ title, price, image, id }: productType) => {
        const newProduct = { title, price, image, id }
        setCart(prev => [...prev, newProduct]);
    }

    const removeToCart = (id: string) => {
        const cartCopy = cart.slice(); //copy
        const newCart = cartCopy.filter((cart:productType)=> cart.id !== id);
        setCart(newCart);
    }

    useEffect(() => {
        const getCartCount = () => cart.length;
        setCartCount(getCartCount());
    }, [cart]);

    return (<CartContext.Provider value={{ cart, addToCart, cartCount, removeToCart }}>
        {children}
    </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);