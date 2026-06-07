const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas
const productRoutes = require("./routes/products.routes");
const contactRoutes = require("./routes/contact.routes");
const quoteRoutes = require("./routes/quote.routes");

// Ruta principal
app.get("/", (req, res) => {
  res.send("API de ventas funcionando correctamente");
});

// Usar rutas
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});