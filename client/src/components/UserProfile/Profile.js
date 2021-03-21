import React, { useState } from "react";
import "./Profile.css";
import uploadImage from "../../components/Imageupload/Image";

const Bio = () => {
  // We can pull the personal data from the database once wired up
  // This URL will need to be unique to the individual user

  const [view, setView] = useState("");
  const [searchInput, setSearchInput] = useState(null);

  function handleInputChange(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("click works", searchInput);
  }

  return (
    <section className="container">
      <h1>My profile</h1>
      <div className="profileContainer">
    
        <img
          className="image avatar"
          src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          alt="placeholder"
        />
    
        <div className="ui card">
          <div className="content">
            <div className="header">Name Surname</div>
            <div className="meta">Joined in 2018</div>
            <div className="description">
              Option to add a biography for each user.
            </div>
          </div>

          {/* Need to link to relevant pages */}
          <div class="ui grid">
            <div className="column">
              <button
                onClick={() => setView("plants")}
                className="ui button DataButton"
              >
                <i className="leaf icon"></i>My plants
                <p className="dataDigit">112</p>
              </button>
              <button
                onClick={() => setView("favourites")}
                className="ui button DataButton"
              >
                <i className="heart icon"></i>Favourites
                <p className="dataDigit">36</p>
              </button>
              <button
                onClick={() => setView("friends")}
                className="ui button DataButton"
              >
                <i className="users icon"></i>Friends
                <p className="dataDigit">8</p>
              </button>
            </div>
          </div>

          <div className="content data">
            <div className="description">
              <i aria-hidden="true" className="mail icon"></i>email@outlook.com
            </div>
          </div>
          <div className="content data">
            <div className="description">
              <i aria-hidden="true" className="birthday icon"></i>23/03/1990
            </div>
          </div>
          <div className="content data">
            <div className="description">
              <i aria-hidden="true" className="location arrow icon"></i>London
            </div>
          </div>
        </div>
      </div>

      {/* Plants section */}
      {view === "plants" && (
        <div className="ui segment"
        initial={{ scale: 1 }}
        animate={{ opacity: 1.5 }}>
          <h2>My plants</h2>
          <p>
            Need to be displaying individual users plants from the database here
          </p>
        </div> 
      )}

      {/* Favourites section */}
      {view === "favourites" && (
        <div className="ui segment">
          <h2>Favourites</h2>
          <p>Need to be display any plants marked as favourites</p>
        </div>
      )}

      {/* Friends section */}
      {view === "friends" && (
        <>
          <div className="ui segment">
            <div className="ui very relaxed two column grid">
              <div className="column">
                <div>
                  <h2>Your friends</h2>
                </div>
              </div>
              <div className="column">
                <form className="ui form">
                  <input
                    value={searchInput}
                    onChange={handleInputChange}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") handleFormSubmit(event);
                    }}
                    className="input"
                    type="search"
                    placeholder="Search Plantica users"
                  />
                  <button className="ui animated button" type="submit">
                    <div className="visible content">Search</div>
                    <div className="hidden content">
                      <i aria-hidden="true" className="search icon"></i>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div class="ui vertical divider">Or</div>
          </div>
          <section className="ui cards">

            {/* Will need to map over database users here */}
            <div className="ui card">
              <div className="content">
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  className="ui tiny middle aligned left floated circular image"
                />
                <div className="header">Steve Sanders</div>
                <div className="description">
                  Bio taken from the users profile
                </div>
                <div className="description">
                  <i className="leaf icon"></i>12 uploads
                </div>
                <button className="ui olive right floated button">
                  <i className="add user icon"></i>Add friend
                </button>
              </div>
            </div>
            <div className="ui card">
              <div className="content">
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
                  className="ui tiny middle aligned left floated circular image"
                />
                <div className="header">Stevie Sanders</div>
                <div className="description">
                  Bio taken from the users profile
                </div>
                <div className="description">
                  <i className="leaf icon"></i>32 uploads
                </div>
                <button className="ui olive right floated button">
                  <i className="add user icon"></i>Add friend
                </button>
              </div>
            </div>
          </section>
          </>
      )}
    </section>
  );
};

export default Bio;
