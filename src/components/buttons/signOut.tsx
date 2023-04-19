'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import '../buttons/buttons.css';

function SignOutButton() {
    return (
        <button className='buttonsDisconnect' onClick={() => signOut()}>Sign out</button>
    );
}

export default SignOutButton;