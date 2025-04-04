import React, { useState } from "react";
import "./cssFiles/searchBar.css";

import searchLogo from "../../assets/logos/searchLogo.svg";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value.trim());
  };

  return (
    <div className="home-page-searchHolder">
      <img src={searchLogo} alt="searchLogo" width="20px" />
      <input
        type="text"
        placeholder="Start searching here ..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;