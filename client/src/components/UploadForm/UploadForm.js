import { useState } from "react";
import "./UploadForm.css";
import Imageupload from "../Imageupload/Image";
import { motion } from "framer-motion";
import fetcher from "../../functions/fetcher";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Upload = () => {

  const [commonName, setCommonName] = useState("");
  const [sciName, setSciName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [occurence, setOccurence] = useState("");
  const imageUrl = "https://i.picsum.photos/id/789/200/300.jpg?hmac=nu1PpKsVA8Td2PEYonJWrmrriU-Km5XoKoEZQ-Tq-6E";
  const [savingPlant, setSavingPlant] = useState(false);
  const [saveError, setSaveError] = useState("");

  const location = useHistory("")

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case "commonName":
        setCommonName(target.value);
        break;
      case "sciName":
        setSciName(target.value)
        break;
      case "familyName":
        setFamilyName(target.value)
        break;
      case "occurence":
        setOccurence(target.value)
        break;
      default:
        break;
    }
  }

  const plantSubmit = async (event) => {
    event.preventDefault();
    setSaveError("");
    if (
      commonName.trim() < 1 ||
      sciName.trim() < 1 ||
      familyName.trim() < 1 ||
      occurence.trim() < 1) {
        setSaveError("Input fields cannot be empty");
        return;
      }
    // adding trefleId as uuid due to potential errors with missing treffleId key
    const signupData = {
      trefleId: uuidv4(),
      commonName,
      imageUrl,
      sciName,
      familyName,
      occurence,
    }
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      setSavingPlant(savingPlant => !savingPlant);
      const parsedStorage = JSON.parse(userInStorage);
      const { token } = parsedStorage
      const response = await fetcher("/api/plant/save", token, signupData);
      if (!response.success) {
        setSaveError(response.payload.message);
        return;
      }
      setSavingPlant(savingPlant => !savingPlant);
      location.push("/user");
    }
  }

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
            <input placeholder="Common name" name="commonName" onChange={(event) => handleInputChange(event)} />
          </div>
          <div className="field">
            <input placeholder="Scientific name" name="sciName" onChange={(event) => handleInputChange(event)} />
          </div>
          <div className="field">
            <input placeholder="Family" name="familyName" onChange={(event) => handleInputChange(event)} />
          </div>
          <div className="field">
            <input placeholder="Occurence" name="occurence" onChange={(event) => handleInputChange(event)} />
          </div>
          {saveError &&
            <p className="savePlantError">{saveError}</p>}
          {savingPlant ? (<Loader active inline="centered" />) :
            (
              <button className="ui animated button" onClick={plantSubmit}>
                <div className="visible content">Save to collection</div>
                <div className="hidden content">
                  <i aria-hidden="true" className="upload icon"></i>
                </div>
              </button>
            )}
        </form>
      </motion.div>
    </section>
  );
};

export default Upload;
