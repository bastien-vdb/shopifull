import React from 'react';
import SignInButton from '../buttons/signIn';
import SignOutButton from '../buttons/signOut';
import Cart from '@/components/cart/cart';
import { getSession } from '@/lib/auth/getNextServerSession';

async function Header() {

    const session = await getSession();
    
    return (
        <div className="absolute right-0 z-10">
            <Cart />
            {session ? <SignOutButton /> : <SignInButton />}
        </div>
    );
}

export default Header;