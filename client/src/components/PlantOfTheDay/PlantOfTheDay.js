import React, { useState, useEffect } from "react";
import "./PlantOfTheDay.css";
import moment from "moment";
import { motion } from "framer-motion";

const DailyPlant = () => {
  const [dailyPlant, setDailyPlant] = useState("");
  const [plantReveal, setPlantReveal] = useState(true);

  function revealRandomPlant() {
    const plantURL = `/api/getRandomPlant/`;
    const fetchPlants = async () => {
      const response = await fetch(plantURL);
      const payload = await response.json();
      const randomPlant =
        payload.data[Math.floor(Math.random() * payload.data.length)];
      setDailyPlant(randomPlant);
      setPlantReveal(true);

      localStorage.setItem("Date", new Date().toString());
      localStorage.setItem("PlantURL", JSON.stringify(randomPlant));
    };
    fetchPlants();
  }

  useEffect(() => {
    if (localStorage.getItem("Date") === null) {
      setPlantReveal(false);
    } else if (
      localStorage.getItem("Date") === moment().format("ddd MMM Do YYYY") &&
      localStorage.getItem("PlantURL") != null)
     {
      console.log("test")
      setPlantReveal(true);
     }
  }, []);

  if (plantReveal === false) {
    return (
      <div className="ui container plantOfTheDay">
        <div className="ui stackable two column grid">
          <div className="row">
            <div className="column">
              <div className="plantReveal">
                <h1>Plant of the day</h1>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="ui button revealBtn"
                  onClick={revealRandomPlant}
                >
                  Click to reveal
                </motion.button>
              </div>
            </div>

            <div className="column plantCard">
              <img
                className="mysteryPlantCard"
                src={`${process.env.PUBLIC_URL}/Leaves/MysteryPlant.png`}
                alt="Mystery plant"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui container plantOfTheDay">
        <div className="ui stackable two column grid">
          <div className="row">
            <div className="column">
              <div className="plantReveal">
                <h1>Plant of the day</h1>
                <motion.button
                  className="ui button disabled"
                >
                  Click to reveal
                </motion.button>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                duration: 3,
              }}
              className="column plantCard"
            >
              <div className="ui card plantOfTheDay">
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
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
};

export default DailyPlant;
