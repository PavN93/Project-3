import React, { useState, useEffect, useContext } from "react";
import PlantResultsContext from "../../context/PlantData";
import { Button, Image, Modal } from "semantic-ui-react";
import "./SearchPlantData.css";
import Slider from "react-slick";

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
    const plantURL = `/api/getPlantByID/${result.id}`;
    const fetchPlants = async () => {
      const response = await fetch(plantURL);
      const payload = await response.json();
      console.log("response data", payload);
      setViewPlant({ show: true, plant: payload.data });
    };
    fetchPlants();
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
                    className="viewMore ui olive button"
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
                  <Modal.Header className="modalHeader">
                    {viewPlant.plant.common_name}
                  </Modal.Header>
                  <Modal.Content className="cardBody" image>
                    <Image
                      size="medium"
                      src={viewPlant.plant.image_url}
                      wrapped
                    />
                    <Modal.Description>
                      <p>
                        Scientific name:{" "}
                        <span>{viewPlant.plant.scientific_name}</span>
                      </p>
                      <p>
                        Family name:{" "}
                        <span>{viewPlant.plant.family_common_name}</span>
                      </p>
                      <p>
                        First founded: <span>{viewPlant.plant.year}</span>
                      </p>
                      <p>
                        Native to: <span>{viewPlant.plant.observations}</span>
                      </p>
                      <p>
                        Average height:{" "}
                        <span>
                          {
                            viewPlant.plant.main_species.specifications
                              .average_height.cm
                          }
                          cm
                        </span>
                      </p>
                      <p>
                        Growth rate:{" "}
                        <span>
                          {
                            viewPlant.plant.main_species.specifications
                              .growth_rate
                          }
                        </span>
                      </p>
                      <p>
                        Foliage:{" "}
                        <span>
                          {
                            viewPlant.plant.main_species.specifications
                              .growth_rate
                          }
                        </span>
                      </p>
                      <p>
                        Toxicity:{" "}
                        <span>
                          {viewPlant.plant.main_species.specifications.toxicity}
                        </span>
                      </p>
                      <p>
                        Edible:{" "}
                        <span>
                          {viewPlant.plant.main_species.edible
                            ? true`Yes`
                            : `No`}
                        </span>
                      </p>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <div className="buttonGroup">
                      <button className="ui red animated button">
                        <div className="hidden content">
                          <i aria-hidden="true" className="heart icon"></i>
                        </div>
                        <div className="visible content">Favourite</div>
                      </button>
                      <div className="or"></div>
                      <Button
                        onClick={() =>
                          setViewPlant({ show: false, plant: null })
                        }
                        className="ui animated button"
                      >
                        <div className="hidden content">
                          <i aria-hidden="true" className="close icon"></i>
                        </div>
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
