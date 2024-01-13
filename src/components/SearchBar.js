import "../css/SearchBar.css";
import React, { useState } from 'react';

const SearchBar = ({ onCityChange, onWeatherDataChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onCityChange(inputValue);
    setInputValue(" ")
  };

  return (
    <form onSubmit={handleSubmit} className='searchbar-container'>
      <input
        type="text"
        placeholder="Enter City Name......."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
