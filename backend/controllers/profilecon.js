const UserProfile = require("../models/userprofile.js");
const createProfile = async (req, res) => {
  try {
      
    const existing = await UserProfile.findOne({ userId: req.user.id });
    if (existing) return res.status(400).json({ msg: "Profile already exists." });

    const newProfile = new UserProfile({
      userId: req.user.id,
      bio: req.body.bio,
      avatar: req.body.avatar,
      location: req.body.location,
      skills: req.body.skills || [],
    });
    await newProfile.save();
   return res.status(201).json(newProfile);
  } 
  catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    await UserProfile.findOneAndDelete({ userId: req.user.id });
    res.json({ msg: "Profile deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};


module.exports = {
    createProfile,deleteProfile
};