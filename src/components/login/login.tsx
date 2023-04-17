'use client';
// Login.js

import React from "react";
import "./login.css"; // Import the CSS module for styling
import { useSession, signIn, signOut } from "next-auth/react";
import { PropsWithChildren } from "react";

const Login = ({ children }: PropsWithChildren) => {

    const { data: session, status } = useSession();

    console.log(status);
    console.log(session);

    if (!session && status !== 'loading') {

        return (
            <div className='loginBg'>
                <div className='loginContainer'>
                    <button onClick={() => signIn()}>Sign in</button>
                    <button onClick={() => signOut()}>Sign out</button>
                    <form className='loginForm' >
                        <h1 className='loginTitle'>Login</h1>
                        <input
                            type="text"
                            className='loginInput'
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            className='loginInput'
                            placeholder="Password"
                        />
                        <button type="submit" className='loginButton'>
                            Login
                        </button>
                        <div className='loginFooter'>
                            <a href="#" className='loginFooterLink'>
                                Forgot password?
                            </a>
                            <span>&nbsp;|&nbsp;</span>
                            <a href="#" className='loginFooterLink'>
                                Sign up
                            </a>
                        </div>
                    </form>
                </div >
            </div >
        );
    }
    return <div>{children}</div>
};


export default Login;
