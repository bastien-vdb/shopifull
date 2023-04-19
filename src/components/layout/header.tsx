'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import SignInButton from '../buttons/signIn';
import SignOutButton from '../buttons/signOut';
import Cart from '@/components/cart/cart';

function Header() {

    const { data: session } = useSession();
    return (
        <div className="absolute right-0 z-10">
            <Cart/>
            {session ? <SignOutButton /> : <SignInButton />}
        </div>
    );
}

export default Header;