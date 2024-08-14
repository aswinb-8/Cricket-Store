// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
// import './Cart.css';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   const handleIncrement = (id) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id) => {
//     dispatch(decrementQuantity(id));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const getTotal = () => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="cart-container">
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <div className="cart-item-image">
//               <img src={item.image} alt={item.title} />
//             </div>
//             <div className="cart-item-details">
//               <h3>{item.title}</h3>
//               <div className="cart-item-controls">
//                 <button onClick={() => handleDecrement(item.id)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => handleIncrement(item.id)}>+</button>
//               </div>
//               <p>${item.price * item.quantity}</p>
//               <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="price-details">
//         <h3>Price Details</h3>
//         <p>Subtotal: ${getTotal()}</p>
//         <p>Delivery Fees: $5</p>
//         <p>Total: ${getTotal() + 5}</p>
//         <button className="checkout-button">Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <div className="cart-item-controls">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <p>${item.price * item.quantity}</p>
              <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="price-details">
        <h3>Price Details</h3>
        <p>Subtotal: ${getTotal()}</p>
        <p>Delivery Fees: $5</p>
        <p>Total: ${getTotal() + 5}</p>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button> {/* Checkout button */}
      </div>
    </div>
  );
};

export default Cart;
