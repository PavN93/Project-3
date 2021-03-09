import React from "react";
import Menu from "../../components/Menu/Menu";
import Weather from "../../components/Weather/Weather"
import About from "../../components/About/About";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";

function Home() {
  
  return (
    <div>
      <Menu />
      <Weather />
      <About />
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
