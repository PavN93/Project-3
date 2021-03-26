import React, { useState, useContext } from "react";
import "./Search.css";
import PlantDataContext from "../../context/PlantData";
import { Loader } from "semantic-ui-react";
import * as Scroll from 'react-scroll';


const Search = ({ setSearchDoneStatus, toggleSearchingStatus, isBusy }) => {
  // I'd like to add some sort of loader(spinner) so the user knows the search is in progress
  const scroll = Scroll.animateScroll;

  const [searchInput, setSearchInput] = useState("");
  const { getPlants } = useContext(PlantDataContext);


  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    toggleSearchingStatus()
    event.preventDefault();
    await getPlants(searchInput);
    setSearchDoneStatus();
    toggleSearchingStatus()
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

        {isBusy ?
          (<Loader active inline="centered" />) : (
            <button
              className="ui animated button center"
              type="submit"
              onClick={handleFormSubmit}
            >
              <div className="visible content searchPlantBtn">Search</div>
              <div className="hidden content">
                <i aria-hidden="true" className="search icon"></i>
              </div>
            </button>
          )}
      </form>
    </div>
  );
};

export default Search;
