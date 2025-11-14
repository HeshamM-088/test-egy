const Cart = require("../../model/cart");

const viewCart = async (req, res) => {
  try {
    const { user } = req.query;

    if (!user) {
      return res.status(400).json({
        message: "User ID is required",
        data: null,
      });
    }

    const userCart = await Cart.findOne({ user: user }).populate("products.product");

    if (!userCart || userCart.products.length === 0) {
      return res.status(200).json({
        message: "Cart is empty",
        data: { products: [] },
      });
    }

    return res.status(200).json({
      message: "Cart retrieved successfully",
      data: userCart,
    });
  } catch (err) {
    console.error("Error viewing cart:", err);
    return res.status(500).json({
      message: "Error viewing cart",
      error: err.message,
    });
  }
};

module.exports = viewCart;
