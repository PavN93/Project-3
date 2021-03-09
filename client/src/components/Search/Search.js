import React, { useState } from "react";
import "./Search.css";

const Search = () => {
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
    getSearchResults();
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
