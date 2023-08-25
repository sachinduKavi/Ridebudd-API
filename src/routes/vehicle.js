const express = require('express');
const router = express.Router();

const { insertVehicleDetails } = require('../controllers/vehicle');


// router.get('/getVehicles', getVehicleData);

router.post('/registerVehicle', insertVehicleDetails);


module.exports = router;