import React from "react";

function Search() {
  return (
    <div className="search-container">
      <div className="ui fullwidth fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
          onChange={() => console.log("Searching...")}
          style={{ width: "100%" }}
        />
        <i className="circular search link icon"></i>
      </div>
    </div>
  );
}

export default Search;
