import React from "react";
import "./UserPlantData.css";

const UserPlantData = () => {
  // If null display: You've yet to add any plants to your database. Upload to get started.
  // else display all using .map

  return (
    <section className="ui container">
      <h1 className="myPlants">My plants</h1>
      <h2 className="paleText">Favourites.</h2>
      <div className="databaseResults">
        <div className="ui card plantResult">
          <img
            className="ui medium image"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <div className="content">
            <div className="header">Plant name</div>
            <div className="meta">
              <span>
                <i className="calendar icon"></i>Created: 7/27/2014
              </span>
            </div>
            <div class="description">Description of plant added.</div>
          </div>
          <div className="extra content">
            <div
              className="ui right labeled button"
              data-content="Like it!"
              data-variation="tiny"
              tabindex="0"
            >
              <div className="ui olive icon tiny button">
                <i className="heart large icon"></i>
              </div>
              <a className="ui basic olive left pointing label">365</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPlantData;
