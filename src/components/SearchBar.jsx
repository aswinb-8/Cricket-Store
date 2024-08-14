import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      <button onClick={handleSearch}></button>
    </div>
  );
};

export default SearchBar;
