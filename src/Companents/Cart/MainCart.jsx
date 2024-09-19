import React from 'react'
import Cart from './Cart';
import './MainCart.css'
import pizza1 from "../../assets/CartImage/pizza1.jpeg"
import burger1 from "../../assets/CartImage/burger1.jpg"
import pizza2 from "../../assets/CartImage/pizza2.jpeg"
import burger2 from "../../assets/CartImage/burger2.jpg"
import pizza3 from "../../assets/CartImage/pizza3.jpg"
import burger3 from "../../assets/CartImage/burger3.jpg"
import pizza4 from "../../assets/CartImage/pizza4.jpg"
import burger4 from "../../assets/CartImage/burger4.jpg"

const MainCart = () => {
    const carts = [
        { image: pizza1, title: 'Pizza', price: '$10' },
        { image: burger1, title: 'Cart 2', price: '$20' },
        { image:pizza2 , title: 'Cart 3', price: '$30' },
        { image: burger2, title: 'Cart 4', price: '$40' },
        { image:pizza3 , title: 'Cart 3', price: '$30' },
        { image: burger3, title: 'Cart 2', price: '$20' },
        { image:pizza4 , title: 'Cart 3', price: '$30' },
        { image: burger4, title: 'Cart 2', price: '$20' },
      ];
  return (
    <div className="cart-container">
    {carts.map((cart, index) => (
      <Cart 
        key={index} 
        image={cart.image} 
        title={cart.title} 
        price={cart.price} 
      />
    ))}
  </div>
  )
}

export default MainCart
