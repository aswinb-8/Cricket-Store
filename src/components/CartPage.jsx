import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{item.title}</h2>
                <p className="cart-item-price">Price: ${item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
