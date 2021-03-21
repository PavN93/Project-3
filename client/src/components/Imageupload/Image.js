import React, { useState } from 'react';



function Imageupload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState("");
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
    console.log(base64EncodedImage);
    try {
      await fetch('api/images', {
        method: 'POST',
<<<<<<< Updated upstream
        body: data
      }
    )
    const file = await res.json()
    console.log("checking url", file)
    setImage(file.secure_url)
    setLoading(false)
=======
        body: JSON.stringify({ data:base64EncodedImage }),
        headers: { 'Content-type': 'application/json' }
      })
    } catch (error) {
      console.error(error);

    }
>>>>>>> Stashed changes
  }
  return (
    <div>
      <h1>Upload Image</h1>
<<<<<<< Updated upstream
      <input
        type="file"
        name=""
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} alt="plant" style={{ width: '300px' }} />
=======
      <form onSubmit={handleSubmitFile}>
        <input type="file" name="image" onChange={handleFileInputChange} 
          value={fileInputState} className="form-input" />
        <button className="btn" type="submit"> Submit</button>
      </form>
      {previewSource && (<img src={previewSource}
        alt="chosen"
        style={{ height: '300px' }} />
>>>>>>> Stashed changes
      )}
    </div>
  )
}

<<<<<<< Updated upstream
export default Imageupload;
=======

export default Imageupload
>>>>>>> Stashed changes
