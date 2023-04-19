'use client';
import React, { useState, createContext, PropsWithChildren, useContext, useEffect } from 'react';
import type { productType } from "@/lib/types/productType";

type productTypeForCart = productType & { qty: number };

type cartContextProps = {
    cart: productTypeForCart[];
    addToCart: ({ title, price, image, id }: productType) => void;
    removeToCart: (id: string) => void;
    removeOneToCart: (id: string) => void;
    addOneToCart: (id: string) => void;
    cartCount: number;
}

const CartContext = createContext<cartContextProps>({
    cart: [],
    addToCart: () => { },
    cartCount: 0,
    removeToCart: () => { },
    removeOneToCart: () => { },
    addOneToCart: () => { },
});

export function CartProvider({ children }: PropsWithChildren) {
    const [cart, setCart] = useState<productTypeForCart[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);

    const addToCart = ({ title, price, image, id }: productType) => {
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

    const removeOneToCart = (id: string) => {
        const cartCopy = cart.slice(); //copy
        const newCart = cartCopy.map(prev => {
            if (prev.id === id && prev.qty > 0) {
                const newQty = prev.qty - 1;
                return { ...prev, qty: newQty }
            }
            return prev;
        })
        setCart(newCart);
    }

    const addOneToCart = (id: string) => {
        const cartCopy = cart.slice(); //copy
        const newCart = cartCopy.map(prev => {
            if (prev.id === id && prev.qty < 100) { //to limit bugs (Over 100 is a special command)
                const newQty = prev.qty + 1;
                return { ...prev, qty: newQty }
            }
            return prev;
        })
        setCart(newCart);
    }

    useEffect(() => {
        const getAllQty = cart.map((prev: productTypeForCart) => prev.qty);
        const newCount = getAllQty.reduce((acc, curr) => acc + curr, 0)
        setCartCount(newCount);
    }, [cart]);

    return (<CartContext.Provider value={{ cart, addToCart, cartCount, removeToCart, removeOneToCart, addOneToCart }}>
        {children}
    </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);