const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../data/products.json");

const readProducts = () => {
  const data = fs.readFileSync(productsPath, "utf-8");
  return JSON.parse(data);
};

const getAllProducts = (req, res) => {
  try {
    let products = readProducts();

    // Filtrar por categoría
    if (req.query.category) {
      products = products.filter(
        (p) => p.category.toLowerCase() === req.query.category.toLowerCase()
      );
    }

    // Filtrar por marca
    if (req.query.brand) {
      products = products.filter(
        (p) => p.brand.toLowerCase() === req.query.brand.toLowerCase()
      );
    }

    // Filtrar por rango de precio
    if (req.query.minPrice || req.query.maxPrice) {
      const minPrice = req.query.minPrice ? parseInt(req.query.minPrice) : 0;
      const maxPrice = req.query.maxPrice ? parseInt(req.query.maxPrice) : Infinity;
      products = products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    }

    // Filtrar por recomendados
    if (req.query.recommended === "true") {
      products = products.filter((p) => p.recommended === true);
    }

    // Ordenar
    if (req.query.sort) {
      if (req.query.sort === "price_asc") {
        products.sort((a, b) => a.price - b.price);
      } else if (req.query.sort === "price_desc") {
        products.sort((a, b) => b.price - a.price);
      } else if (req.query.sort === "popular") {
        products.sort((a, b) => b.popularity - a.popularity);
      }
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

const getProductById = (req, res) => {
  try {
    const products = readProducts();
    const product = products.find((p) => p.id === parseInt(req.params.id));

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
