import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CollectionContext from "../../context/CollectionContext";
import Imageupload from "../../components/Imageupload/Image";
import { useWindowEvent } from "../useWindowEvent";
import fetcher from "../../functions/fetcher";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import moment from "moment";
import "./Profile.css";

const Bio = ({ fetchUsers, searchError, usersFromDB }) => {
  console.log("userList:", usersFromDB);
  console.log("error", searchError);

  const [item, setItem] = useState(localStorage.getItem("profilepic"));
  const checkLocalStorage = () => {
    const value = localStorage.getItem("profilepic");
    setItem(value);
  };
  useWindowEvent("storage", checkLocalStorage);

  const { collectionFromDB } = useContext(CollectionContext);

  const scroll = Scroll.animateScroll;
  const [view, setView] = useState(""); // plants, friends
  const [searchInput, setSearchInput] = useState(null);
  const [userData, setUserData] = useState("");
  const [planticaMembers, setPlanticaMembers] = useState("");

  useEffect(async () => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      const parsedStorage = JSON.parse(userInStorage);
      const { token } = parsedStorage;
      const members = await fetcher("/api/user/members", token);
      setPlanticaMembers(members);
    }
  }, []);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // generating account created date
  const accountCreated = require("mongodb")
    .ObjectId(userData._id)
    .getTimestamp();
  const joined = accountCreated.toISOString().slice(0, 4);

  // refactoring birthday format
  const birthday = moment(userData.dateOfBirth).format("DD/MM/YYYY");

  useEffect(() => {
    const accountData = JSON.parse(localStorage.getItem("user"));
    setUserData(accountData);
  }, []);

  return (
    <section className="ui container">
      <h1>My profile</h1>
      <div className="profileContainer">
        <img className="image avatar" src={item} alt="placeholder" />
        <Imageupload />
        <div className="ui card">
          <div className="content">
            <div className="header">{userData.username}</div>
            <div className="meta">Joined in {joined}</div>
          </div>

          <div className="ui grid">
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
                <p className="dataDigit">{planticaMembers.length}</p>
              </motion.button>
            </div>
          </div>

          <div className="content data">
            <div className="description">
              <i aria-hidden="true" className="mail icon"></i>
              {userData.email}
            </div>
          </div>
          <div className="content data">
            <div className="description">
              <i aria-hidden="true" className="birthday icon"></i>
              {birthday}
            </div>
          </div>
          <div className="content data">
            <div className="description">
              <i aria-hidden="true" className="location arrow icon"></i>
              {userData.currentCity}
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

          <motion.div
            initial={{ y: 2500 }}
            animate={{ y: 10 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="ui container"
          >
            <div className="ui relaxed divided items">
              {collectionFromDB.map((collectionFromDB) => (
                <div className="item">
                  <div className="ui small image">
                    <img src="#" />
                  </div>
                  <div className="content">
                    <div className="header">
                      Scientific name: {collectionFromDB.sciName}
                    </div>
                    <div className="meta">
                      Family: {collectionFromDB.familyName}
                    </div>
                    <div className="description">
                      Native to:
                      {collectionFromDB.occurence}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
                  <button
                    className="ui animated button"
                    type="submit"
                    onClick={(event) => fetchUsers(searchInput, event)}
                  >
                    <div className="visible content">Search</div>
                    <div className="hidden content">
                      <i aria-hidden="true" className="search icon"></i>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="ui vertical divider">Or</div>
          </motion.div>

          <div className="friendsList">
            <motion.div
              initial={{ y: 2500 }}
              animate={{ y: 10 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="ui divided items"
            >
              {planticaMembers.map((planticaMembers) => (
                <div className="item">
                  <div className="image">
                    <img src={planticaMembers.imageURL} alt="placeholder" />
                  </div>
                  <div className="content">
                    <div className="header">{planticaMembers.username}</div>
                    <div className="description">
                      Location: {planticaMembers.currentCity}
                    </div>
                    <div className="description">
                      <i className="leaf icon"></i>
                      {planticaMembers.collections} uploads
                    </div>
                    <div className="extra content">
                      <button className="ui olive right floated button">
                        <i className="add user icon"></i>Add friend
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default Bio;
