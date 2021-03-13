import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="container">
      <motion.div initial={{x: -1000}}
      animate={{x: 20}} className="homepageBanner">
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
