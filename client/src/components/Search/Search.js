import React, { useState } from "react";
import "./Search.css";
import usePlantData from "../usePlantdata";

const Search = () => {
  // I'd like to add some sort of loader(spinner) so the user knows the search is in progress
  //const [fetchResults, setFetchResults] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const {
    plants, setSearch,search
  }=usePlantData()

  /*function getSearchResults() {
    console.log("Searching for:", search);
    const searchedPlant = fetchResults.filter(
      (fetchResults) => search.indexOf(fetchResults.name) > -1
    );
    console.log(searchedPlant);
    setFetchResults(searchedPlant);
  }*/

  function handleInputChange(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setSearch(searchInput)
    console.log("event.taget.value",searchInput)
    
  }

  return (
    <div className="container">
      <form className="ui form">
        <input
          value={search}
          onChange={handleInputChange}
          onKeyDown={(event) => {
          if (event.key === 'Enter') handleFormSubmit(event);
          }}
          className="input"
          type="search"
          placeholder="Search plants"
        />
        <button
          className="ui animated button"
          type="submit"
          onClick={handleFormSubmit}
        >
          <div className="visible content">Search</div>
          <div className="hidden content">
            <i aria-hidden="true" className="search icon"></i>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Search;
