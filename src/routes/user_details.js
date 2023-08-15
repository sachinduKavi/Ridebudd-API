const express = require('express');
const router = express.Router();

const { getUserDetails } = require('../controllers/user_details');


router.get('/getUserDetails/:userID/:userEmail', getUserDetails);


module.exports = router;