const express = require('express');
const parkingSpots = require('../controllers/parkingSpots');

const router = express.Router();

router.post('/post', parkingSpots.postParkingSpotsController)
router.put('/put', parkingSpots.putParkingSpotsController)
router.get('/get', parkingSpots.getParkingSpotsController)

module.exports = router;