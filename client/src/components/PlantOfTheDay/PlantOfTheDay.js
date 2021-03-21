import React, { useState } from "react";
import "./PlantOfTheDay.css";

const DailyPlant = () => {
  const [dailyPlant, setDailyPlant] = useState("");
  const [view, setView] = useState("template"); // dailyPlant, template

  function revealRandomPlant() {
    const plantURL = `/api/getRandomPlant/`;
    const fetchPlants = async () => {
      const response = await fetch(plantURL);
      const payload = await response.json();
      console.log("payload", payload.data);

      const randomPlant =
        payload.data[Math.floor(Math.random() * payload.data.length)];
      console.log("random", randomPlant);
      setDailyPlant(randomPlant);
      setView("dailyPlant")
    };
    fetchPlants();
  }

  return (
    <div className="ui container plantOfTheDay">
      <div className="ui two column grid">
        <div className="row">
          <div className="column">
            <div className="plantReveal">
              <h2>Plant of the day</h2>
              <button className="ui button" onClick={revealRandomPlant}>
                Click to reveal
              </button>
            </div>
          </div>
          {view === "template" && (
          <div className="column plantCard">
            <div className="ui olive cards">
              <div className="ui card">
                <div className="content">
                  <img
                    className="image leafPlaceholder"
                    src={`${process.env.PUBLIC_URL}/Leaves/leaf_1.png`}
                    alt="leaf"
                  />
                </div>
              </div>
            </div>
          </div>
          )}

          {view === "dailyPlant" && (
            <div className="column plantCard">
            <div className="ui olive cards">
              <div className="ui card">
                <div className="content">
                  <img
                    src={dailyPlant.image_url}
                    className="ui image plantImage"
                    alt="plant"
                  />
                  <div className="header">{dailyPlant.common_name}</div>
                  <div className="meta">First founded: {dailyPlant.year}</div>
                  <div className="description">
                    Scientific name: {dailyPlant.scientific_name}
                  </div>
                  <div className="description">
                    Family: {dailyPlant.family_common_name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DailyPlant;
