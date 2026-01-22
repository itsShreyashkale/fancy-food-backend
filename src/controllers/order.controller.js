import Order from "../models/Order.js"

/**
 * @desc   Place new order
 * @route  POST /api/orders
 */
export const placeOrder = async (req, res) => {
  try {
    const {
      items,
      address,
      subtotal,
      tax,
      deliveryFee,
      total,
    } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" })
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      address,
      subtotal,
      tax,
      deliveryFee,
      total,
    })

    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ message: "Order creation failed" })
  }
}

/**
 * @desc   Get all orders
 * @route  GET /api/orders
 */
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 })

    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" })
  }
}

