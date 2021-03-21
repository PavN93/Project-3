import React from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather"
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import PlantCollection from "../../components/SearchPlantData/SearchPlantData"
import Footer from "../../components/Footer/Footer";
import fetcher from "../../functions/fetcher";

const handleSaveClick = async (plantData, event) => {
  event.preventDefault();
  const userInStorage = localStorage.getItem("user");
  if (userInStorage) {
    const parsedStorage = JSON.parse(userInStorage);
    const token = parsedStorage.token;
    const body = {
      _id: plantData.id,
      sciName: plantData.scientific_name,
      familyName: plantData.family_common_name,
      occurence: plantData.observations,
    }
    const response = await fetcher("/api/plant/save", token, body);
    console.log(response);
  }
}

function Home() {
  
  return (
    <div>
      <Menu/>
      <Banner/>
      <Weather/>
      <Search/>
      <PlantCollection handleSaveClick={handleSaveClick}/>
      <Footer/>
    </div>
  );
}

export default Home;
