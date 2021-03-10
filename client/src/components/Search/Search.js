import React, { useState } from "react";
import "./Search.css";
import PlantData from "../Plantdata";

const Search = () => {
  // I'd like to add some sort of loader(spinner) so the user knows the search is in progress
  const [fetchResults, setFetchResults] = useState([]);
  const [search, setSearch] = useState();

  function getSearchResults() {
    console.log("Searching for:", search);
    const searchedPlant = fetchResults.filter(
      (fetchResults) => search.indexOf(fetchResults.name) > -1
    );
    console.log(searchedPlant);
    setFetchResults(searchedPlant);
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    PlantData();
  }

  return (
    <div className="container">
      <form className="ui form">
        <input
          value={search}
          onChange={handleInputChange}
          className="input"
          type="search"
          placeholder="Search plants"
          onKeyDown={(event) => {
            /* Allows user to press enter to search  */
            if (event.key === 'Enter') handleFormSubmit(event);
          }}
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
