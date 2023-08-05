import { uploadCloudinary } from "@/utils/upload";
import React, { useState } from "react";

const ImagesForm = () => {
  const [images, setImages] = useState();
  const [links, setLinks] = useState();
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
   
//pload preset must be whitelisted for unsigned uploads
    try {
        let arr = []
        setLoading(true)
        for(let i = 0; i < images.length; i++){
            const data = await uploadCloudinary(images[i])
            arr.push(data)
        }
        setLoading(false)
        setLinks(arr)
    } catch (error) {
        setLoading(false)
        console.log(error) 
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple={true}
          onChange={(e) => setImages(e.target.files)}
        />

        <button type="submit">{loading ? 'Loading...' : 'Upload'}</button>
      </form>

      {
        links && links.length > 0 && links.map(link =>{
            return (
                <div key={link?.publicId}> 
                <p>publicId: {link?.publicId}</p>
                <p>url: {link?.url}</p>
                <img width={300} src={link?.url} />
                </div>
            )
        })
      }

    </div>
  );
};

export default ImagesForm;
