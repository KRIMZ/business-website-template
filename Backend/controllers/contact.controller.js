const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "../storage/contacts.json");

const readContacts = () => {
  if (!fs.existsSync(contactsPath)) {
    return [];
  }
  const data = fs.readFileSync(contactsPath, "utf-8");
  return data ? JSON.parse(data) : [];
};

const saveContacts = (contacts) => {
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2), "utf-8");
};

const createContact = (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validar campos obligatorios
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios (name, email, phone, message)",
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    const contacts = readContacts();
    const newContact = {
      id: contacts.length > 0 ? Math.max(...contacts.map((c) => c.id)) + 1 : 1,
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    };

    contacts.push(newContact);
    saveContacts(contacts);

    res.status(201).json({
      message: "Contacto guardado exitosamente",
      contact: newContact,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el contacto" });
  }
};

module.exports = {
  createContact,
};
