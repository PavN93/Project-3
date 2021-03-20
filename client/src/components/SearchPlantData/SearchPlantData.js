import React, { useState, useEffect, useContext } from "react";
import PlantResultsContext from "../../context/PlantData";
import "./SearchPlantData.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { Button, Image, Modal } from "semantic-ui-react";

const PlantCollection = () => {
  const { plants } = useContext(PlantResultsContext);
  const [viewPlant, setViewPlant] = useState({ show: false, plant: null });

  useEffect(() => {}, [plants]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function handlePlantModal({ result }) {
    console.log("Requested plant:", result);
    setViewPlant({ show: true, plant: result });
  }

  return (
    plants.length >= 1 && (
      <div className="plantData">
        <h2>Search results</h2>
        <div className="ui olive cards">
          <Slider {...settings}>
            {plants.map((result) => (
              <div className="ui card">
                <div className="content">
                  <img
                    src={result.image_url}
                    className="ui image plantImage"
                    alt={result.common_name}
                  />
                  <div className="header">{result.common_name}</div>
                  <div className="meta">First founded: {result.year}</div>
                  <div className="description">
                    Scientific name: {result.scientific_name}
                  </div>
                  <div className="description">{result.observations}</div>
                </div>
                <div className="extra content">
                  <button
                    onClick={() => handlePlantModal({ result })}
                    className="ui olive basic button"
                  >
                    View more
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          {viewPlant.show && (
            <Modal
              onClose={() => setViewPlant({ show: false, plant: null })}
              open={true}
            >
              <Modal.Header>{viewPlant.plant.common_name}</Modal.Header>
              <Modal.Content image>
                <Image size="medium" src={viewPlant.plant.image_url} wrapped />
                <Modal.Description>
                  <p>Scientific name: {viewPlant.plant.scientific_name}</p>
                  <p>Test text</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <div className="buttonGroup">
                  
                  {/* save button */}
                  <button className="ui green animated button">
                    <div className="hidden content"><i aria-hidden="true" className="save icon"></i></div>
                    <div className="visible content">save</div>
                    </button>

                  {/* remove button */}
                  <button className="ui red animated button">
                    <div className="hidden content"><i aria-hidden="true" className="delete icon"></i></div>
                    <div className="visible content">remove</div>
                    </button>

                  <div className="or"></div>

                  {/* close button */}
                  <Button onClick={() => setViewPlant({ show: false, plant: null })} className="ui animated button">
                  <div className="hidden content"><i aria-hidden="true" className="close icon"></i></div>
                  <div className="visible content">Close</div>
                  </Button>
                  </div>
              </Modal.Actions>
            </Modal>
          )}
        </div>
      </div>
    )
  );
};

export default PlantCollection;
