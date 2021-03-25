import React, { useState, useEffect, useContext } from "react";
import PlantResultsContext from "../../context/PlantData";
import "./SearchPlantData.css";
import { Button, Image, Modal} from "semantic-ui-react";
import Slider from "react-slick";
import UserAuthContext from "../../context/UserAuth";
import CollectionContext from "../../context/CollectionContext";


const PlantCollection = ({ handleSaveClick, handleRemoveClick, isSearchDone}) => {

  const { userLoggedIn } = useContext(UserAuthContext);

  // collection of saved plants of logged in user
  const { collectionFromDB } = useContext(CollectionContext);

  // plants searched on homepage
  const { plants } = useContext(PlantResultsContext);

  // plant details for modal
  const [viewPlant, setViewPlant] = useState({ show: false, plant: null });

  useEffect(() => { }, [plants]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
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
      setViewPlant({ show: true, plant: payload.data });
    };
    fetchPlants();
  }
  if (plants.length === 0) {
    return (
      isSearchDone && (<div className="ui container searchError">No search results found</div>)
    );
  }
  return (
    plants.length >= 1 && (
      <div className="ui container">
        <div className="plantData">
          <h2>Your search results</h2> 
          <div className="ui olive cards">
            <Slider {...settings}>
              {plants.map((result) => (
                <div className="ui card" key={result.id}>
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
                      className="viewMore ui olive basic button"
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
                      Scientific name:
                      <span>{viewPlant.plant.scientific_name}</span>
                    </p>
                    <p>
                      Family name:
                      <span>{viewPlant.plant.family_common_name}</span>
                    </p>
                    <p>
                      First founded:
                      <span>{viewPlant.plant.year}</span>
                    </p>
                    <p>
                      Native to:
                      <span>{viewPlant.plant.observations}</span>
                    </p>
                    <p>
                      Average height:
                      <span>
                        {
                          viewPlant.plant.main_species.specifications
                            .average_height.cm
                        }
                        cm
                      </span>
                    </p>
                    <p>
                      Growth rate:
                      <span>
                        {
                          viewPlant.plant.main_species.specifications
                            .growth_rate
                        }
                      </span>
                    </p>
                    <p>
                      Foliage:
                      <span>
                        {
                          viewPlant.plant.main_species.specifications
                            .ligneous_type
                        }
                      </span>
                    </p>
                    <p>
                      Toxicity:
                      <span>
                        {viewPlant.plant.main_species.specifications.toxicity}
                      </span>
                    </p>
                    <p>
                      Edible:
                      <span>
                        {viewPlant.plant.main_species.edible ? true`Yes` : `No`}
                      </span>
                    </p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <div className="buttonGroup">

                    {userLoggedIn && (
                      collectionFromDB.some(element => element.trefleId === viewPlant.plant.id) ?
                        (/* remove button */
                          <button className="ui red animated button" onClick={(event) => handleRemoveClick(viewPlant.plant.id, event)}>
                            <div className="hidden content"><i aria-hidden="true" className="delete icon"></i></div>
                            <div className="visible content">remove</div>
                          </button>) :
                        (/* save button */
                          < button className="ui green animated button" onClick={(event) => handleSaveClick(viewPlant.plant, event)}>
                            <div className="hidden content"><i aria-hidden="true" className="save icon"></i></div>
                            <div className="visible content">save</div>
                          </button>)

                    )}

                    <div className="or"></div>
                    <Button
                      onClick={() => setViewPlant({ show: false, plant: null })}
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
      </div >
    )
  );
};

export default PlantCollection;
