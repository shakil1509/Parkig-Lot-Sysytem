const express = require('express');
const vehicles = require('../controllers/vehicles');

const router = express.Router();

router.post('/post', vehicles.postVehiclesController)
router.put('/put', vehicles.putVehiclesController)
router.get('/get', vehicles.getVehiclesController)
// router.get('/get/:vehicleId', vehicles.getSingleVehiclesController)

module.exports = router;