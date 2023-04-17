'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

function SignOutButton() {
    return (
        <button onClick={() => signOut()}>Sign out</button>
    );
}

export default SignOutButton;