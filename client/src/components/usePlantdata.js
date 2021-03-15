import { useState, useEffect} from "react";



const PlantData = () => {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  //fetch data and render on page load once
  useEffect(() => {
   // console.log(search)
    if (search) {
      try {
        
        console.log("intial plant data render");
        const queryURL = `/api/getplants/${search}`;
        const fetchPlants = async () => {
          const response = await fetch(queryURL);
          const payload = await response.json();
          console.log("response data", payload);
          setPlants(payload.results || []); // if search fails fallbacks or empty array
        };
        fetchPlants();
      }
      catch (error) {
        console.log("apicall error", error);
        
      }
    }
  }, [search])
  return {plants,setSearch,search}
};


export default PlantData;