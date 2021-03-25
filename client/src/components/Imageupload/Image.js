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
        console.log(response)

        const userpic = localStorage.setItem("profilepic",response.url)

      }
    } catch (error) {
      console.error(error);

    }
  }
  return (
    <div>
      <h1>Upload Display Picture</h1>
      <form onSubmit={handleSubmitFile}>
        <input type="file" name="image" onChange={handleFileInputChange}
          value={fileInputState} className="form-input" />
        <button className="btn" type="submit"> Submit</button>
      </form>
      {previewSource && (<img src={previewSource}
        alt="chosen"
        style={{ height: '300px' }} />
      )}
    </div>
  )
}


export default Imageupload
