const router = require('express').Router();
const  {imageuploader} = require('../controllers/filesmangements');
const multer = require('multer'); // For handling file uploads


// Configure multer for memory storage (or disk storage if preferred)
    const storage = multer.memoryStorage(); // Store files in memory as Buffer objects in RAM 
    const upload = multer({ storage: storage });

router.post('/upload-image', upload.single('myphoto'), imageuploader);

module.exports = router

//Frontend → Multer Buffer → Streamifier → Cloudinary stream upload