import React from "react";
import "./Collection.css";

const PlantCollection = () => {
  // This will map over the trefle API to pull out sample plant data
  // The component can be reused throughout the app

  return (
    <div className="plantData">
      <h2>Sample plant data</h2>
      <div className="ui olive cards">
        <div className="ui card">
          <div className="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              className="ui image" alt="placeholder"
            />
            <div className="header">Plant name</div>
            <div className="meta">Scientific name</div>
            <div className="description">Description</div>
          </div>
          <div className="extra content"><button className="ui olive basic button">View more</button></div>
        </div>
        <div className="ui card">
          <div className="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              class="ui image" alt="placeholder"
            />
            <div className="header">Plant name</div>
            <div className="meta">Scientific name</div>
            <div className="description">Description</div>
          </div>
          <div className="extra content"><button className="ui olive basic button">View more</button></div>
        </div>
        <div className="ui card">
          <div className="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              className="ui image" alt="placeholder"
            />
            <div className="header">Plant name</div>
            <div className="meta">Scientific name</div>
            <div className="description">Description</div>
          </div>
          <div className="extra content"><button className="ui olive basic button">View more</button></div>
        </div>
        <div className="ui card">
          <div className="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              class="ui image" alt="placeholder"
            />
            <div className="header">Plant name</div>
            <div className="meta">Scientific name</div>
            <div className="description">Description</div>
          </div>
          <div className="extra content"><button className="ui olive basic button">View more</button></div>
        </div>
      </div>
    </div>
  );
};

export default PlantCollection;
