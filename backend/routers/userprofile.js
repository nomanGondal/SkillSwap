const express = require("express");
const router = express.Router();
const {  profilvalidation } = require("../middleware/profilevalidation");
const { createProfile,deleteProfile } = require("../controllers/profilecon");

// User Profile Routes
router.post("/create",  profilvalidation, createProfile);
router.delete("/delete", profilvalidation, deleteProfile);

module.exports = router;
