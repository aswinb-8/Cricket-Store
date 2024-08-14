// src/pages/Products.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Cricket_Products from '../components/Cricket_Products';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <Cricket_Products searchQuery={searchQuery} />
    </div>
  );
};

export default Products;
