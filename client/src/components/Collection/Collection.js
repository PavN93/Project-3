import React, { useEffect, useContext } from "react";
import "./Collection.css";
import PlantResultsContext from "../../context/PlantData";
import Slider from "react-slick";

const PlantCollection = () => {
  const { plants } = useContext(PlantResultsContext);

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
  };

  return (
    <div className="plantData">
      <h2>Sample plant data</h2>
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
                <button className="ui olive basic button">View more</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlantCollection;
