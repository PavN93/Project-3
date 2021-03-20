import React from "react";
import { motion } from "framer-motion";
import * as Scroll from 'react-scroll';
import "./Banner.css";

const Banner = () => {

  const scroll = Scroll.animateScroll;

  return (
    <section className="ui container">
      <motion.img
        animate={{ y: [-250, 750], rotate: 70 }}
        transition={{ duration: 4, delay: 1 }}
        className="leafScroller"
        src={`${process.env.PUBLIC_URL}/Leaves/leaf_2.png`}
        alt="Leaf"
      />
      <motion.div
        initial={{ x: -1500 }}
        animate={{ x: 20 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="homepageBanner"
      >
        <h3>Welcome to</h3>
        <h1 className="appTitle">Plantica</h1>
        <p className="subHeading">
          From botanists to ecologists, hikers to hunters, the world is filled
          with likeminded nature enthusiasts wanting to record what we find.
          Plantica is a tool to help users identify and record plant species, as
          well as offer information on different flora.
        </p>
        <motion.button whileHover={{ scale: 1.1, originX: 0 }} onClick={() => scroll.scrollTo(1000)} className="getStarted ui button">Get started</motion.button>
      </motion.div>
    </section>
  );
};

export default Banner;
