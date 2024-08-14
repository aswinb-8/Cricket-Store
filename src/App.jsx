import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cricket_Products from './components/Cricket_Products';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp'; // Import SignUp component
import Checkout from './components/Checkout'; 
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <Cricket_Products searchQuery={searchQuery} />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
