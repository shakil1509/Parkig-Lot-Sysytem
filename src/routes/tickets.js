const express = require('express');
const tickets = require('../controllers/tickets');

const router = express.Router();

router.post('/post', tickets.postTicketsController)
router.put('/put', tickets.putTicketsController)
router.get('/get', tickets.getTicketsController)
router.get('/get/:ticketId', tickets.getSingleTicketsController)

module.exports = router;