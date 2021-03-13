import React from "react";
import "./Collection.css";

const PlantCollection = () => {
  // This will map over the trefle API to pull out sample plant data
  // The component can be reused throughout the app

  return (
    <div className="plantData">
      <h2>Sample plant data</h2>
      <div class="ui olive cards">
        <div class="ui card">
          <div class="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              class="ui image"
            />
            <div class="header">Plant name</div>
            <div class="meta">Scientific name</div>
            <div class="description">Description</div>
          </div>
          <div class="extra content"><button class="ui olive basic button">View more</button></div>
        </div>
        <div class="ui card">
          <div class="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              class="ui image"
            />
            <div class="header">Plant name</div>
            <div class="meta">Scientific name</div>
            <div class="description">Description</div>
          </div>
          <div class="extra content"><button class="ui olive basic button">View more</button></div>
        </div>
        <div class="ui card">
          <div class="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              class="ui image"
            />
            <div class="header">Plant name</div>
            <div class="meta">Scientific name</div>
            <div class="description">Description</div>
          </div>
          <div class="extra content"><button class="ui olive basic button">View more</button></div>
        </div>
        <div class="ui card">
          <div class="content">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              class="ui image"
            />
            <div class="header">Plant name</div>
            <div class="meta">Scientific name</div>
            <div class="description">Description</div>
          </div>
          <div class="extra content"><button class="ui olive basic button">View more</button></div>
        </div>
      </div>
    </div>
  );
};

export default PlantCollection;
