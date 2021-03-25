import React, { useState, useContext } from "react";
import "./Search.css";
import PlantDataContext from "../../context/PlantData";
import * as Scroll from 'react-scroll';

const Search = ({ setSearchDoneStatus }) => {
  // I'd like to add some sort of loader(spinner) so the user knows the search is in progress
  const scroll = Scroll.animateScroll;

  const [searchInput, setSearchInput] = useState(null);
  const { getPlants } = useContext(PlantDataContext);


  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await getPlants(searchInput);
    setSearchDoneStatus();
    scroll.scrollTo(1200)
  }

  return (
    <div className="ui container searchContainer">
      <h2>Explore thousands of plants from all over the world</h2>
      <form className="ui form">
        <input
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleFormSubmit(event);
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
          <div className="visible content searchPlantBtn">Search</div>
          <div className="hidden content">
            <i aria-hidden="true" className="search icon"></i>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Search;
