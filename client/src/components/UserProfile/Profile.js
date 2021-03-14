import React from "react";
import "./Profile.css";

const Bio = () => {
  // We can pull the personal data from the database once wired up
  // This URL will need to be unique to the individual user

  return (
    <section className="container">
      <h1>Your profile</h1>
      <div className="profileContainer">
        <img
          className="image avatar"
          src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" alt="placeholder"
        />
        <div className="ui card">
          <div className="content">
            <div className="header">Name Surname</div>
            <div className="meta">Joined in 2018</div>
            <div className="description">
              Option to add a biography for each user.
            </div>
          </div>
          <div className="extra content">
            <p>
              <i aria-hidden="true" className="users icon"></i>10 Friends
            </p>
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
