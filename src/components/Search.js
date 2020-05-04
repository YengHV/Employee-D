import React from "react";


function Search() {
  return (
    
    <div className="searchBar">
    <input type="search" id="search" placeholder="Search Employee" value="userVal" onChange={handleSubmit}/>
    </div>
  );
}

export default Search;