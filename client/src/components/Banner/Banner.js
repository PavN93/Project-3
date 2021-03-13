import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="container">
      <motion.img
        initial={{ y: -0 }}
        animate={{ y: 750 }}
        transition={{ duration: 4 }}
        className="leafScroller"
        src={`${process.env.PUBLIC_URL}/Leaves/leaf_2.png`}
        alt="Leaf"
      ></motion.img>
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
        {/* Add a get started feature here */}
      </motion.div>
    </section>
  );
};

export default Banner;
