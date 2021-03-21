import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="ui container">
      <div
        className="column parallaxPlant"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Leaves/ParallaxPlants.jpg"
          })`,
        }}
      >
        <p className="quote">How calming the silence of growing things.</p>
      </div>
    </div>
  );
};

export default Quote;