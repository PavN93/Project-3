import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather";
import Profile from "../../components/UserProfile/Profile";
import Imageupload from "../../components/Imageupload/Image";
import Footer from "../../components/Footer/Footer";
import fetcher from "../../functions/fetcher";

const UserProfile = () => {

  const [usersFromDB, setFetchedUsers] = useState([]);
  const [searchError, setSearchError] = useState("");

  const fetchUsers = async (username, event) => {
    event.preventDefault();
    setSearchError("");
    if (username.length < 1) {
      setSearchError("Search value cannot be empty")
      return;
    }
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      const parsedStorage = JSON.parse(userInStorage);
      const { token } = parsedStorage;
      const body = {
        username
      }
      const response = await fetcher("/api/user/search", token, body);
      if (!response.success) {
        setSearchError(response.payload.message);
        return;
      }
      setFetchedUsers(response.payload.searchedUsers);
      console.log(response.payload.searchedUsers)
    }
  }

  return (
    <div>
      <Menu />
      <Weather />
      <Profile fetchUsers={fetchUsers} searchError={searchError} usersFromDB={usersFromDB} />
      <Imageupload />
      <Footer />
    </div>
  );
}

export default UserProfile;