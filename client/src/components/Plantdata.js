import { useState, useEffect,} from "react";


const PlantData = () => {
  
  const [plants, setPlants] = useState([]);

  // fetch data and render on page load once
  useEffect(() => {
    console.log("intial plant data render");
    const queryURL = "https://trefle.io/api/v1/plants/search?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw&q={search}";
    const fetchPlants = async () => {
    const response = await fetch(queryURL);
    const payload = await response.json();
    console.log("response data", payload);
    setPlants(payload.results || []); // if search fails fallbacks or empty array
    };
    fetchPlants();
  }, [])};


  export default PlantData;