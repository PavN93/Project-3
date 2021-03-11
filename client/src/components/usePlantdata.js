import { useState, useEffect, } from "react";


const usePlantData = () => {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState(null);

  // fetch data and render on page load once
  useEffect(() => {
    console.log(search)
    if (search) {
      try {
        
        console.log("intial plant data render");
        const queryURL = `https://trefle.io/api/v1/plants/search?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw&q=${search}`;
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




export default usePlantData;