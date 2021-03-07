import React from "react";
import Menu from "../../components/Menu/Menu";
import About from "../../components/About/About";
import Search from "../../components/Search/search";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Menu />
      <About />
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
