import React, { useState } from "react";

function Search({ onSearch,searchTerm}) {
  
  const handleSearch = (term) => {
    
    onSearch(term); 
  };

  return (
    <div className="search-container">
      <div className="ui fullwidth fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: "100%" }}
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;