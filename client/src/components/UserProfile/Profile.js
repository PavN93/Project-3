import React from "react";
import uploadImage from "../Imageupload/Image";
import "./Profile.css";
import uploadImage from "../../components/Imageupload/Image";

const Bio = () => {
  // We can pull the personal data from the database once wired up
  // This URL will need to be unique to the individual user

  return (
    <section className="container">
      <h1>My profile</h1>
      <div className="profileContainer">
<<<<<<< Updated upstream
      <button>
=======
    
>>>>>>> Stashed changes
        <img
          className="image avatar"
          src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          alt="placeholder"
        />
<<<<<<< Updated upstream
        </button>
=======
    
>>>>>>> Stashed changes
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
            <button className="ui button DataButton">
              <i className="leaf icon"></i>My plants
              <p className="dataDigit">112</p>
            </button>
            <button className="ui button DataButton">
              <i className="heart icon"></i>Favourites
              <p className="dataDigit">36</p>
            </button>
            <button className="ui button DataButton">
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
    </section>
  );
};

export default Bio;
