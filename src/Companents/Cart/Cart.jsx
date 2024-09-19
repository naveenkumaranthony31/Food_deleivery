// Cart.js
import React from 'react';
import './Cart.css'; // Import your CSS file

const Cart = ({ image, title, price }) => {
  return (
    <div className="cart">
      <img src={image} alt={title} className="cart-image" />
      <h3 className="cart-title">{title}</h3>
      <p className="cart-price">{price}</p>
      <button className='cart-button'>Order Now</button>
    </div>
  );
};

export default Cart;
