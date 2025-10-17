const registerationModel = require('../models/registeration');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    try {
        console.log("Received signup request:", req.body);
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await registerationModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create new user
        console.log("Creating new user:");
        const newUser = new registerationModel({ name, email, password });
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser.password = hashedPassword;
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });
       

        // Generate JWT token
       /* const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET);
        console.log("JWT Token generated:", token);
        return res.status(201).json({ message: 'Signup successful', user: { name: newUser.name, email: newUser.email }, token });*/
    } catch (error) {
        console.error(error);
       return res.status(500).json({ message: 'Server error' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await registerationModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not exists' });
        }
        // Check password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // If password matches, return success response
        console.log("User logged in successfully:", existingUser);
        return res.status(200).json({ message: 'Login successful', user: { name: existingUser.name, email: existingUser.email },token });
       
    } catch (error) {
        console.error(error);   
        res.status(500).json({ message: 'Server error' });
    }


}
// Export the signup function

module.exports = {
    signup,login
};
