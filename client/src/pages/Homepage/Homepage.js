import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather";
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import PlantCollection from "../../components/SearchPlantData/SearchPlantData";
import Quote from "../../components/Quote/Quote";
import DailyPlant from "../../components/PlantOfTheDay/PlantOfTheDay";
import SignUp from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";
import fetcher from "../../functions/fetcher";
import CollectionContext from "../../context/CollectionContext";

function Home() {
  const { syncCollectionWithDB } = useContext(CollectionContext);
  
  const handleSaveClick = async (plantData, event) => {
    event.preventDefault();
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      const parsedStorage = JSON.parse(userInStorage);
      const { token, _id } = parsedStorage;
      const body = {
        trefleId: plantData.id,
        userId: _id,
        sciName: plantData.scientific_name,
        familyName: plantData.family_common_name,
        occurence: plantData.observations,
      }
      const response = await fetcher("/api/plant/save", token, body);
      console.log(response);
      await syncCollectionWithDB();
    }
  }
  
  return (
    <div>
      <Menu/>
      <Banner/>
      <Weather/>
      <Search/>
      <PlantCollection handleSaveClick={handleSaveClick}/>
      <Quote />
      <DailyPlant />
      <SignUp />
      <Footer/>
    </div>
  );
}

export default Home;
