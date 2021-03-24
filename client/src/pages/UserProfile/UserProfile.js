import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather"
import Profile from "../../components/UserProfile/Profile";
import Imageupload from "../../components/Imageupload/Image";
import Footer from "../../components/Footer/Footer";

function UserProfile() {

  const [fetchedUsers, setFetchedUsers] = useState([]);

  const fetchUsers = (username, event) => {
    event.preventDefault();
    console.log("searched user:", username);
  }

  return (
    <div>
      <Menu />
      <Weather />
      <Profile fetchUsers={fetchUsers}/>
      <Imageupload />
      <Footer />
    </div>
  );
}

export default UserProfile;