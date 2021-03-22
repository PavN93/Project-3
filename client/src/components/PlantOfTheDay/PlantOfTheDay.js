import React, { useState, useRef } from "react";
import "./PlantOfTheDay.css";
import { motion } from "framer-motion";

const DailyPlant = () => {
  const [dailyPlant, setDailyPlant] = useState("");
  const [view, setView] = useState("template"); // dailyPlant, template

  function revealRandomPlant() {
    const plantURL = `/api/getRandomPlant/`;
    const fetchPlants = async () => {
      const response = await fetch(plantURL);
      const payload = await response.json();
      const randomPlant =
        payload.data[Math.floor(Math.random() * payload.data.length)];
      setDailyPlant(randomPlant);
      setView("dailyPlant");
      onBtnClick();
    };
    fetchPlants();
  }

  let btnRef = useRef();
  const onBtnClick = (e) => {
    btnRef.current.setAttribute("disabled", "disabled");
  };

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
                ref={btnRef}
                onClick={revealRandomPlant}
              >
                Click to reveal
              </motion.button>
            </div>
          </div>

          {view === "template" && (
            <div className="column plantCard">
              <img
                className="mysteryPlantCard"
                src={`${process.env.PUBLIC_URL}/Leaves/MysteryPlant.png`}
                alt="Mystery plant"
              />
            </div>
          )}

          {view === "dailyPlant" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
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
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyPlant;
