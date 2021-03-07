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
      <form className="form-inline">
      <i className="fas fa-search"></i>
        <input 
          value={search}
          onChange={handleInputChange}
          className="input"
          type="search"
          placeholder="Search plants"
        />
        <button
          onClick={handleFormSubmit}
          className="btn btn-light"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
