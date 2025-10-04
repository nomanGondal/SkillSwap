const router = require('express').Router();
const { signupvalidation, loginvalidation } = require('../middleware/authvalidation');
const { signup, login } = require('../controllers/authcontroller');
// Define routes for authentication
router.post('/signup', signupvalidation , signup);
router.post('/login', loginvalidation , login);
//router.get('/google',googleauth, googlelogin );
module.exports = router