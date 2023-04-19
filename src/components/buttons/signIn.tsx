'use client';
import React from 'react';
import { signIn } from "next-auth/react";
import '../buttons/buttons.css';

function SignInButton() {
    return (
        <button className='buttonsConnect' onClick={() => signIn()}>Sign in</button>
    );
}

export default SignInButton;