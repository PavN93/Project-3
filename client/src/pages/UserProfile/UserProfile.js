import React from "react";
import Menu from "../../components/Menu/Menu";
import Profile from "../../components/UserProfile/Profile";
import Imageupload from "../../components/Imageupload/Image";
import Footer from "../../components/Footer/Footer";
import Imageupload from "../../components/Imageupload/Image";

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