import React, { useState, useEffect, useContext } from "react";
import PlantResultsContext from "../../context/PlantData";
import "./SearchPlantData.css";
import Slider from "react-slick";

import { Button, Image, Modal } from "semantic-ui-react";

const PlantCollection = () => {
  const { plants } = useContext(PlantResultsContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Plant array", plants);
  }, [plants]);

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

  return (
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
                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={
                    <button className="ui olive basic button">View more</button>
                  }
                >
                  <Modal.Header>{result.common_name}</Modal.Header>
                  <Modal.Content image>
                    <Image size="medium" src={result.image_url} wrapped />
                    <Modal.Description>
                      <p>Scientific name: {result.scientific_name}</p>
                      <p>{result.observations}</p>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlantCollection;
