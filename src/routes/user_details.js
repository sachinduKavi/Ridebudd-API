const express = require('express');
const router = express.Router();

const { getUserDetails, newUser } = require('../controllers/user_details');


router.get('/getUserDetails/:userID/:userEmail', getUserDetails);

router.post('/newUser/:fName/:LName/:userEmail/:pass/:mobile', newUser);


module.exports = router;