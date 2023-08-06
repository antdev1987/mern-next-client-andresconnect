// import axios from 'axios';

// import { createCanvas, loadImage } from 'canvas'

// export const uploadCloudinary = async (file) => {
//   // Cargar la imagen utilizando la API FileReader
//   const image = await loadImage(URL.createObjectURL(file));

//   // Definir el nuevo tamaño deseado (ajusta según tus necesidades)
//   const maxWidth = 800;
//   const maxHeight = 600;

//   // Calcular el nuevo tamaño de la imagen manteniendo la proporción
//   let newWidth = image.width;
//   let newHeight = image.height;

//   if (newWidth > maxWidth) {
//     newWidth = maxWidth;
//     newHeight = (image.height * maxWidth) / image.width;
//   }

//   if (newHeight > maxHeight) {
//     newHeight = maxHeight;
//     newWidth = (image.width * maxHeight) / image.height;
//   }

//   // Crear un lienzo (canvas) temporal con el nuevo tamaño
//   const canvas = createCanvas(newWidth, newHeight);
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(image, 0, 0, newWidth, newHeight);

//   // Obtener la imagen en formato JPEG con una calidad reducida (ajusta el valor si lo deseas)
//   const newImageData = canvas.toDataURL('image/jpeg', 0.8);

//   // Convertir el dato de la imagen en base64 a un objeto de tipo Blob para formar el FormData
//   const newImageBlob = await fetch(newImageData).then((res) => res.blob());
// console.log(newImageBlob)
//   // Crear un nuevo FormData con la imagen reducida
//   const formData = new FormData();
//   formData.append('file', newImageBlob);
//   formData.append('upload_preset', 'ml_default_preset');
//   formData.append('folder', 'mis_imagenes-desde_react');

//   // Subir la imagen reducida a Cloudinary
//   const { data } = await axios.post(
//     'https://api.cloudinary.com/v1_1/dfumwi9fa/image/upload',
//     formData
//   );

//   return { publicId: data?.public_id, url: data?.secure_url };
// };


// import axios from 'axios'


// export const uploadCloudinary = async(file) =>{

//     // console.log(file,'deupload')

//     const formData = new FormData()
//     // console.log('el form data')

//     formData.append('file', file)
//     formData.append('upload_preset', 'ml_default_preset')
//     formData.append('folder', 'mis_imagenes-desde_react');


//     const {data}  = await axios.post('https://api.cloudinary.com/v1_1/dfumwi9fa/image/upload',formData)



//     return {publicId:data?.public_id, url:data?.secure_url}

// }

import axios from 'axios';
// import imageFileResizer from 'react-image-file-resizer';
import FileResizer from 'react-image-file-resizer';

export const uploadCloudinary = async (file) => {
    console.log(file,'el file')

    const resizeFile = (file) =>
    new Promise((resolve) => {
        FileResizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
    
    const resizedBlob = await resizeFile(file);

    console.log(resizedBlob,'ver')
    
  // Crear un nuevo objeto File a partir del Blob redimensionado
  const resizedFile = new File([resizedBlob], file.name, {
    type: file.type,
    lastModified: file.lastModified,
  });

  const formData = new FormData();
  formData.append('file', resizedFile);
  formData.append('upload_preset', 'ml_default_preset');
  formData.append('folder', 'mis_imagenes-desde_react');

  try {
    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/dfumwi9fa/image/upload',
      formData
    );
    return { publicId: data?.public_id, url: data?.secure_url };
  } catch (error) {
    console.error('Error al subir la imagen a Cloudinary:', error);
    throw error;
  }
};
