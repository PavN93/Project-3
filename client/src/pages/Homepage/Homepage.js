import React from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather";
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import PlantCollection from "../../components/SearchPlantData/SearchPlantData";
import Quote from "../../components/Quote/Quote";
import DailyPlant from "../../components/PlantOfTheDay/PlantOfTheDay";
import SignUp from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";

// components to be added in here are:
// data from the search function displayed in cards
// top plants for the season or something as a carousel to fill the empty space?

function Home() {
  
  return (
    <div>
      <Menu/>
      <Banner/>
      <Weather/>
      <Search/>
      <PlantCollection/>
      <Quote />
      <DailyPlant />
      <SignUp />
      <Footer/>
    </div>
  );
}

export default Home;
