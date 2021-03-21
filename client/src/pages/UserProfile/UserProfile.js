import React from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather"
import Profile from "../../components/UserProfile/Profile";
import Imageupload from "../../components/Imageupload/Image";
import Footer from "../../components/Footer/Footer";

function UserProfile() {
  
  return (
    <div>
      <Menu />
      <Weather />
      <Profile />
      <Imageupload/>
      <Footer />
    </div>
  );
}

export default UserProfile;