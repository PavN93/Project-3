import React from "react";
import "./PlantOfTheDay.css";

const DailyPlant = () => {

  
  function revealRandomPlant() {
    const plantURL = `/api/getRandomPlant/`;
    const fetchPlants = async () => {
      const response = await fetch(plantURL);
      const payload = await response.json();
      console.log("payload", payload.data)

      const randomPlant = payload.data[Math.floor(Math.random() * payload.data.length)]
      console.log(randomPlant)
    };
    fetchPlants();
  }
  
  return (
    <div className="ui container">
      <div className="ui stackable two column grid">
        <div className="column">
          <div className="ui segment">
            <h2>Plant of the day</h2>
            <button onClick={revealRandomPlant}>Click to reveal</button>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            
          <div className="ui olive cards">

                <div className="ui card">
                  <div className="content">
                    <img
                      src="#"
                      className="ui image plantImage"
                      alt="plant"
                    />
                    <div className="header"></div>
                    <div className="meta">First founded:</div>
                    <div className="description">
                      Scientific name: 
                    </div>
                    <div className="description">Observationa</div>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DailyPlant;
