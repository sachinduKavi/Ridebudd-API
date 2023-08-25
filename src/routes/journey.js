const express = require('express');
const router = express.Router();

const {run, newJourney} = require('../controllers/journey');




router.get('/journeyDetails', run);

router.post('/newJourney/:userID/:venue/:startingCity/:endCity/:sLongitudes/:sLatitudes/:eLongitudes/:eLatitudes/:description', newJourney);




module.exports = router;