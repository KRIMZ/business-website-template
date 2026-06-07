const fs = require("fs");
const path = require("path");

const quotesPath = path.join(__dirname, "../storage/quotes.json");
const productsPath = path.join(__dirname, "../data/products.json");

const readQuotes = () => {
  if (!fs.existsSync(quotesPath)) {
    return [];
  }
  const data = fs.readFileSync(quotesPath, "utf-8");
  return data ? JSON.parse(data) : [];
};

const readProducts = () => {
  const data = fs.readFileSync(productsPath, "utf-8");
  return JSON.parse(data);
};

const saveQuotes = (quotes) => {
  fs.writeFileSync(quotesPath, JSON.stringify(quotes, null, 2), "utf-8");
};

const createQuote = (req, res) => {
  try {
    const { name, email, phone, company, productId, message } = req.body;

    // Validar campos obligatorios
    if (!name || !email || !phone || !company || !productId || !message) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios (name, email, phone, company, productId, message)",
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    // Verificar que el producto exista
    const products = readProducts();
    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const quotes = readQuotes();
    const newQuote = {
      id: quotes.length > 0 ? Math.max(...quotes.map((q) => q.id)) + 1 : 1,
      name,
      email,
      phone,
      company,
      productId: parseInt(productId),
      productName: product.name,
      message,
      createdAt: new Date().toISOString(),
    };

    quotes.push(newQuote);
    saveQuotes(quotes);

    res.status(201).json({
      message: "Cotización guardada exitosamente",
      quote: newQuote,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar la cotización" });
  }
};

module.exports = {
  createQuote,
};
