import React from "react";
import "./UploadForm.css";
import Imageupload from "../Imageupload/Image"

const Upload = () => {
  return (
    <section className="container">
        <h1>Upload</h1>
        <p>Add a plant to your collection</p>
      <div className="loginContainer">
        <Imageupload />
        <form className="ui form">
        <div className="field">
            <input placeholder="Name" />
          </div>
          <div className="field">
            <input placeholder="Description" />
          </div>
          <div className="field">
            <input placeholder="Species" />
          </div>
          <div className="field">
            <input placeholder="Occurence" />
          </div>
          <button className="ui animated button">
            <div className="visible content">Upload</div>
            <div className="hidden content">
              <i aria-hidden="true" className="upload icon"></i>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Upload;