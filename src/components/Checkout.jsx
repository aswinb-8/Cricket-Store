import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to a backend or processing payment
    alert(`Order placed successfully with ${paymentMethod}!`);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your shipping address"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="payment-method">Payment Method:</label>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                value="debit-card"
                checked={paymentMethod === 'debit-card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Debit Card
            </label>
            <label>
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                value="net-banking"
                checked={paymentMethod === 'net-banking'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Net Banking
            </label>
          </div>
        </div>
        {paymentMethod === 'credit-card' || paymentMethod === 'debit-card' ? (
          <div className="form-group">
            <label htmlFor="card-details">Card Details:</label>
            <input
              type="text"
              id="card-details"
              value={cardDetails}
              onChange={(e) => setCardDetails(e.target.value)}
              placeholder="Enter your card number"
              required
            />
          </div>
        ) : null}
        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
