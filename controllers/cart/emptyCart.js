const Cart = require("../../model/cart");
const emptyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found for this user" });
    }
    cart.items = [];
    await cart.save();
    res.json({
      message: "Cart emptied successfully",
      cart,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = emptyCart;
