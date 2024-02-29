const express = require('express');
const transactions = require('../controllers/transactions');

const router = express.Router();

router.post('/post', transactions.postTransactionsController)
router.get('/get', transactions.getTransactionsController)

module.exports = router;