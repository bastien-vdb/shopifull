// Login.js

import React from "react";
import "./login.css"; // Import the CSS module for styling

const Login = () => {
    return (
        <div className='loginBg'>
            <div className='loginContainer'>
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
};

export default Login;
