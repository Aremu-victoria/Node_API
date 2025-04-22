
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
});

const fileUpload = async (req, res) => {
    const url = 'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'
    const uploadResult = await cloudinary.uploader
        .upload(url, { public_id: 'shoes', })
        .catch((error) => {
            console.log(error);
            res.status(401).json({ error: 'File upload failed', });

        });
    console.log(uploadResult);
    if (uploadResult) {
        res.status(201).json({ message: 'File uploaded successfully', });
    }

}


module.exports = fileUpload