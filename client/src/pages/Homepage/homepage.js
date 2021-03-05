import React from "react";
import Menu from "../../components/Menu/menu";
import About from "../../components/About/about";
import Search from "../../components/Search/search";
import Footer from "../../components/Footer/footer";

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
