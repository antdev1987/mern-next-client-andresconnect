import axios from 'axios'


export const uploadCloudinary = async(file) =>{

    // console.log(file,'deupload')

    const formData = new FormData()
    // console.log('el form data')

    formData.append('file', file)
    formData.append('upload_preset', 'ml_default_preset')
    formData.append('folder', 'mis_imagenes-desde_react');


    const {data}  = await axios.post('https://api.cloudinary.com/v1_1/dfumwi9fa/image/upload',formData)



    return {publicId:data?.public_id, url:data?.secure_url}

}