import React from "react";
import Menu from "../../components/Menu/menu";
import Weather from "../../components/Weather/weather"
import About from "../../components/About/about";
import Search from "../../components/Search/search";
import Footer from "../../components/Footer/footer";

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
