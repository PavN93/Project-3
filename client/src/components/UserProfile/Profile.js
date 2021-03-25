import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import CollectionContext from "../../context/CollectionContext";
import { useWindowEvent } from "../useWindowEvent";



  const Bio = ({ fetchUsers, searchError, usersFromDB }) => {
    console.log("userList:", usersFromDB);
    console.log("error", searchError);
    // We can pull the personal data from the database once wired up
    // This URL will need to be unique to the individual user
    const [item, setItem] = useState(localStorage.getItem('profilepic'))
    const checkLocalStorage = () => {
      const value = localStorage.getItem('profilepic');
      setItem(value)
      console.log('USEEFFECT', value)
    }
    useWindowEvent('storage', checkLocalStorage)


    const { collectionFromDB } = useContext(CollectionContext);
    console.log("your collection from DB:", collectionFromDB);


  const { collectionFromDB } = useContext(CollectionContext);
  console.log("your collection from DB:", collectionFromDB);

  const scroll = Scroll.animateScroll;
  const [view, setView] = useState(""); // plants, friends
  const [searchInput, setSearchInput] = useState(null);
  const [userData, setUserData] = useState("");


  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }


    const scroll = Scroll.animateScroll;
    const [view, setView] = useState(""); // plants, friends
    const [searchInput, setSearchInput] = useState(null);
    const [userData, setUserData] = useState("");

    function handleInputChange(event) {
      setSearchInput(event.target.value);
    }


    useEffect(() => {
      const accountData = JSON.parse(localStorage.getItem("user"));
      setUserData(accountData);
    }, []);


    return (
      <section className="ui container">
        <h1>My profile</h1>
        <div className="profileContainer">
          <img
            className="image avatar"
            src={item}
            alt="placeholder"
          />
          <div className="ui card">
            <div className="content">
              <div className="header">{userData.username}</div>
              <div className="meta">Joined in 2018</div>
            </div>

            <div class="ui grid">
              <div className="column">
                <motion.button
                  whileHover={{ scale: 1.1, originX: 0 }}
                  onClick={() => {
                    setView("plants");
                    scroll.scrollTo(800);
                  }}
                  className="ui button dataButton"
                >
                  <i className="leaf icon"></i>My plants
                <p className="dataDigit">{collectionFromDB.length}</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, originX: 0 }}
                  onClick={() => {
                    setView("friends");
                    scroll.scrollTo(800);
                  }}
                  className="ui button dataButton"
                >
                  <i className="users icon"></i>Friends
                <p className="dataDigit">8</p>
                </motion.button>
              </div>
            </div>

            <div className="content data">
              <div className="description">
                <i aria-hidden="true" className="mail icon"></i>{userData.email}
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
          <Link to="/upload">
            <button className="ui button editProfile">
              <i className="cloud upload icon"></i>Upload plant
          </button>
          </Link>
        </div>

        {/* Plants section */}
        {view === "plants" && (
          <motion.div
            className="ui segment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, duration: 5 }}
          >
            <h2>My plants</h2>

            <div className="ui container">
              <div className="ui relaxed divided items">
                {collectionFromDB.map((collectionFromDB) => (
                  <div className="item">
                    <div className="ui small image">
                      <img src="#" />
                    </div>
                    <div className="content">
                      <div className="header">Scientific name: {collectionFromDB.sciName}</div>
                      <div className="meta">Family: {collectionFromDB.familyName}</div>
                      <div className="description">Native to:
                      {collectionFromDB.occurence}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Friends section */}
        {view === "friends" && (
          <>
            <motion.div
              className="ui segment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, duration: 5 }}
            >
              <div className="ui stackable divided relaxed two column grid">
                <div className="column">
                  <h2>My friends</h2>
                </div>
                <div className="column">
                  <form className="ui form friendSearch">
                    <input
                      value={searchInput}
                      onChange={handleInputChange}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") fetchUsers(searchInput, event);
                      }}
                      className="input"
                      type="search"
                      placeholder="Search Plantica users"
                    />
                    <button className="ui animated button" type="submit" onClick={(event) => fetchUsers(searchInput, event)}>
                      <div className="visible content">Search</div>
                      <div className="hidden content">
                        <i aria-hidden="true" className="search icon"></i>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
              <div class="ui vertical divider">Or</div>
            </motion.div>

            <div className="friendsList">
              <div className="ui divided items">
                {/* Will need to map over database users here */}
                <div className="item">
                  <div className="image">
                    <img
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      alt="placeholder"
                    />
                  </div>
                  <div className="content">
                    <div className="header">Steve Sanders</div>
                    <div className="description">
                      Bio taken from the users profile
                  </div>
                    <div className="description">
                      <i className="leaf icon"></i>12 uploads
                  </div>
                    <div className="extra content">
                      <button className="ui olive right floated button">
                        <i className="add user icon"></i>Add friend
                    </button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
                      alt="placeholder"
                    />
                  </div>
                  <div className="content">
                    <div className="header">Stevie Sanders</div>
                    <div className="description">
                      Bio taken from the users profile
                  </div>
                    <div className="description">
                      <i className="leaf icon"></i>8 uploads
                  </div>
                    <div className="extra content">
                      <button className="ui olive right floated button">
                        <i className="add user icon"></i>Add friend
                    </button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                      alt="placeholder"
                    />
                  </div>
                  <div className="content">
                    <div className="header">Matthew Brown</div>
                    <div className="description">
                      Bio taken from the users profile
                  </div>
                    <div className="description">
                      <i className="leaf icon"></i>32 uploads
                  </div>
                    <div className="extra content">
                      <button className="ui olive right floated button">
                        <i className="add user icon"></i>Add friend
                    </button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                      alt="placeholder"
                    />
                  </div>
                  <div className="content">
                    <div className="header">Molly Smith</div>
                    <div className="description">
                      Bio taken from the users profile
                  </div>
                    <div className="description">
                      <i className="leaf icon"></i>27 uploads
                  </div>
                    <div className="extra content">
                      <button className="ui olive right floated button">
                        <i className="add user icon"></i>Add friend
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    );
  };

}

export default Bio;
