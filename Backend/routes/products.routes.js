const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controllers/products.controller");

// GET todos los productos con filtros y orden
router.get("/", getAllProducts);

// GET producto por ID
router.get("/:id", getProductById);

module.exports = router;
