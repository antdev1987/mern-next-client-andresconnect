import { uploadCloudinary } from "@/utils/upload";
import React, { useState } from "react";

const ImagesForm = () => {
  //   const [images, setImages] = useState([]);
  const [links, setLinks] = useState();
  const [loading, setLoading] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleImageChange = async (event) => {
    const files = event.target.files;
    console.log(files);

    if (!files) return;
    // setImages(event.target.files);
    setImages((prevFileList) => [...prevFileList, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //aki creo un array con los dos inputs y sus imagenes
    const images = [image1, image2, image3];
    //aki transformo el array de arriba al array que necesita cloudinary para subir las imagenes
    const finalList = images.map((fileList) => fileList[0]);

    //pload preset must be whitelisted for unsigned uploads
    try {
      let arr = [];
      setLoading(true);
      for (let i = 0; i < finalList.length; i++) {
        const data = await uploadCloudinary(finalList[i]);
        arr.push(data);
      }

      setLoading(false);
      setLinks(arr);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          // multiple={true}
          //   multiple
          //   onChange={handleImageChange}
          onChange={(e) => setImage1(e.target.files)}
        />

        <input
          type="file"
          //   multiple
          onChange={(e) => setImage2(e.target.files)}
          //   onChange={handleImageChange}
        />

        <input
          type="file"
          //   multiple
          onChange={(e) => setImage3(e.target.files)}
          //   onChange={handleImageChange}
        />

        <button type="submit">{loading ? "Loading..." : "Upload"}</button>
      </form>

      {links &&
        links.length > 0 &&
        links.map((link) => {
          return (
            <div key={link?.publicId}>
              <p>publicId: {link?.publicId}</p>
              <p>url: {link?.url}</p>
              <img width={300} src={link?.url} />
            </div>
          );
        })}
    </div>
  );
};

export default ImagesForm;
