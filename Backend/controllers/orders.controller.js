const fs = require('fs')
const path = require('path')

const ordersPath = path.join(__dirname, '../storage/orders.json')

const readOrders = () => {
  if (!fs.existsSync(ordersPath)) {
    fs.writeFileSync(ordersPath, '[]')
  }

  const data = fs.readFileSync(ordersPath, 'utf-8')
  return data ? JSON.parse(data) : []
}

const writeOrders = (orders) => {
  fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2))
}

const createOrder = (req, res) => {
  try {
    const { customer, items, total } = req.body

    if (!customer?.name || !customer?.email || !customer?.phone) {
      return res.status(400).json({
        message: 'Nombre, correo y teléfono son obligatorios',
      })
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: 'El carrito no puede estar vacío',
      })
    }

    if (!total || total <= 0) {
      return res.status(400).json({
        message: 'El total de la compra debe ser mayor a cero',
      })
    }

    const orders = readOrders()

    const newOrder = {
      id: orders.length + 1,
      customer,
      items,
      total,
      status: 'pendiente',
      createdAt: new Date().toISOString(),
    }

    orders.push(newOrder)
    writeOrders(orders)

    return res.status(201).json({
      message: 'Orden guardada correctamente',
      order: newOrder,
    })
  } catch (error) {
    console.error('Error al guardar orden:', error)

    return res.status(500).json({
      message: 'Error interno al guardar la orden',
    })
  }
}

const getOrders = (req, res) => {
  try {
    const orders = readOrders()
    return res.json(orders)
  } catch (error) {
    console.error('Error al obtener órdenes:', error)

    return res.status(500).json({
      message: 'Error interno al obtener las órdenes',
    })
  }
}

module.exports = {
  createOrder,
  getOrders,
}