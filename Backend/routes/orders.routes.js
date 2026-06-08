const express = require('express')
const router = express.Router()

const {
  createOrder,
  getOrders,
} = require('../controllers/orders.controller')

router.post('/', createOrder)
router.get('/', getOrders)

module.exports = router