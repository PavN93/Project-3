import React from "react";
import "./UploadForm.css";
import Imageupload from "../Imageupload/Image";
import { motion } from "framer-motion";

const Upload = () => {
  return (
    <section className="ui container">
      <h1>Upload</h1>
      <p className="uploadMsg">Add a plant to your collection</p>
      <motion.div
        className="uploadContainer"
        initial={{ x: 0, y: 150, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          delay: 1,
          default: { duration: 1 },
        }}
      >
        <form className="ui form">
        <Imageupload />
          <div className="field">
            <input placeholder="Name" />
          </div>
          <div className="field">
            <input placeholder="Scientific name" />
          </div>
          <div className="field">
            <input placeholder="Species" />
          </div>
          <div className="field">
            <input placeholder="Occurence" />
          </div>
          <button className="ui animated button">
            <div className="visible content">Submit to database</div>
            <div className="hidden content">
              <i aria-hidden="true" className="upload icon"></i>
            </div>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Upload;
