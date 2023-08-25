const express = require('express');
const router = express.Router();

const { insertVehicleDetails } = require('../controllers/vehicle');


// router.get('/getVehicles', getVehicleData);

router.post('/registerVehicle/:regNum/:owner/:image/:seats/:status/:chassisNum', insertVehicleDetails);


module.exports = router;