import React, { useState } from 'react';
import fetcher from '../../functions/fetcher'


function Imageupload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);

  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  }
  const uploadImage = async (base64EncodedImage) => {
    console.log("base64EncodedImage");
    try {
      const userInStorage = localStorage.getItem("user");
      if (userInStorage) {
        const parsedStorage = JSON.parse(userInStorage);
        const { token, _id } = parsedStorage;
        const body = {
          _id,
          data: base64EncodedImage,
        }
        const response = await fetcher(`api/images/upload`, token, body)
        if (response.url) {
          localStorage.setItem("profilepic",response.url)
          window.location.reload();
        }

      }
    } catch (error) {
      console.error(error);

    }
  }
  return (
    <div>
      <div className="addPhoto">
      <i className="camera huge icon grey"></i>
      <p>Add a photo</p>
      </div>
      <form onSubmit={handleSubmitFile}>
        <input type="file" name="image" onChange={handleFileInputChange}
          value={fileInputState} className="form-input" />
        <button className="ui animated button">
            <div className="visible content">Upload image</div>
            <div className="hidden content">
              <i aria-hidden="true" className="cloud upload icon"></i>
            </div>
          </button>
      </form>
      {previewSource && (<img src={previewSource}
        alt="chosen"
        style={{ height: '300px' }} />
      )}
    </div>
  )
}


export default Imageupload
