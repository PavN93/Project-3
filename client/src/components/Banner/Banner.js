import React from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import "./Banner.css";

const Banner = () => {

  const { scrollYProgress } = useViewportScroll();
  const leaf = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="container">
      <motion.div
        style={{ leaf }}>
        <img
        className="leafScroller"
        src={`${process.env.PUBLIC_URL}/Leaves/leaf_2.png`}
        alt="Leaf"
        />
      </motion.div>
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
