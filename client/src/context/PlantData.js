import { useState, createContext } from 'react';

const PlantDataContext = createContext();

const PlantDataContextProvider = ({ children }) => {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  //fetch data and render on page load once
  const getPlants = (searchInput) => {
    if (searchInput) {
      try {
        console.log("intial plant data render");
        const queryURL = `/api/getplants/${searchInput}`;
        const fetchPlants = async () => {
          const response = await fetch(queryURL);
          const payload = await response.json();
          console.log("response data", payload);
          setPlants(payload.data || []); // if search fails fallbacks or empty array
        };
        fetchPlants();
      } catch (error) {
        console.log("apicall error", error);
      }
    }
  };


  return (
    <PlantDataContext.Provider value={{ plants, getPlants, setSearch }}>
      {children}
    </PlantDataContext.Provider>
  )
}

export default PlantDataContext;
export { PlantDataContextProvider };