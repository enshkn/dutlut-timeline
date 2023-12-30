// SearchBar.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'; // Özelleştirilmiş stilleri burada ekleyeceğiz

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Arama terimini tutacak state

  // Arama terimini güncelleyen fonksiyon
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Enter tuşuna basıldığında ya da search butonuna tıklandığında çalışacak fonksiyon
  const handleSearch = () => {
    console.log('Aranan Terim:', searchTerm); // Konsola arama terimini yazdırma
  };

  // Enter tuşuna basıldığında çalışacak fonksiyon
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary search-button"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

