import React from "react";
import "./cssFiles/searchBar.css";

import searchLogo from "../../assets/logos/searchLogo.svg";

function SearchBar() {
  return (
    <div className="home-page-searchHolder">
      <img src={searchLogo} alt="searchLogo" width="20px" />
      <input type="text" placeholder="Start searching here ..." />
    </div>
  );
}


export default SearchBar;