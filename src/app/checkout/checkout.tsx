import React from "react";
import Image from "next/image";

import cartIcon from "../../../public/images/cart.png";

import "./checkout.css";

function Checkout() {
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h1>Checkout</h1>
                <div className="cart-icon-container">
                    <Image src={cartIcon} alt="Cart" width={60} height={60} />
                    <span className="cart-count">2</span>
                </div>
            </div>
            <div className="checkout-content">
                <div className="checkout-section">
                    <h2>Billing Information</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" />
                        </div>
                    </form>
                </div>
                <div className="checkout-section">
                    <h2>Payment Information</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" id="card-number" name="card-number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="card-holder">Card Holder</label>
                            <input type="text" id="card-holder" name="card-holder" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiry">Expiry Date</label>
                            <input type="text" id="expiry" name="expiry" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="checkout-footer">
                <button className="cancel-btn">Cancel</button>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
}

export default Checkout;
