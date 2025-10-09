const cloudinary = require('../utiles/cloudnary');
const streamifier = require('streamifier');

const imageuploader = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No image file provided.');
    }

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });

    res.status(200).json({
      message: 'Image uploaded successfully!',
      imageUrl: result.secure_url,
      publicId: result.public_id
    });

  } catch (error) {
    console.error(" Error uploading image:", error);
    res.status(500).send('Failed to upload image.');
  }
};

module.exports = { imageuploader };
