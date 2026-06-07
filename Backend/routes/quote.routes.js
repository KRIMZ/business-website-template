const express = require("express");
const router = express.Router();
const { createQuote } = require("../controllers/quote.controller");

// POST crear cotización
router.post("/", createQuote);

module.exports = router;
