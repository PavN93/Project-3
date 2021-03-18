import React from "react";
import Menu from "../../components/Menu/Menu";
import Profile from "../../components/UserProfile/Profile";
import Imageupload from "../../components/Imageupload/Image";
import Footer from "../../components/Footer/Footer";

function UserProfile() {
  
  return (
    <div>
      <Menu />
      <Profile />
      <Imageupload/>
      <Footer />
    </div>
  );
}

export default UserProfile;