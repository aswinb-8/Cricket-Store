import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
 <div className="logo">
         <img src="https://st4.depositphotos.com/16030310/25209/v/450/depositphotos_252096864-stock-illustration-vector-illustration-blue-letters.jpg" alt="Logo" />
       </div>   
      
      <nav className="nav-links">
      <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          
          <Link to="/cart">Cart ({totalQuantity})</Link>
          <Link to="/login">Log In</Link>
          {/* <Link to="/signup">Sign Up</Link> */}
        
      </nav>
    </header>
  );
};

export default Header;
