import { useState, useEffect,} from "react";


const PlantData = ({ search, sort, setSort, value }) => {
  
  const [plants, setPlants] = useState([]);

  // fetch data and render on page load once
  useEffect(() => {
    console.log("intial plant data render");
    const queryURL = "https://trefle.io/api/v1/plants?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw";
    const fetchPlants = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("response data", payload);
      setPlants(payload.results || []); // if search fails fallbacks or empty array
    };
    fetchPlants();
  }, [])};
