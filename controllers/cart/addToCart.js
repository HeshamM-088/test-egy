const Cart = require("../../model/cart");

const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    if (!user || !product || !quantity) {
      return res.status(400).json({
        message: "All fields are required",
        data: null,
      });
    }

    let userCart = await Cart.findOne({ user: user });

    if (!userCart) {
      const newCart = new Cart({
        user: user,
        products: [{ product: product, quantity: quantity }],
      });

      await newCart.save();
      return res.status(201).json({
        message: "Item added to cart successfully",
        data: newCart,
      });
    }

    const existingItem = userCart.products.find(
      (item) => item.product.toString() === product
    );

    if (existingItem) {
      existingItem.quantity += Number(quantity);
    } else {
      userCart.products.push({ product: product, quantity: quantity });
    }

    await userCart.save();

    return res.status(200).json({
      message: "Item added to cart successfully",
      data: userCart,
    });
  } catch (err) {
    console.error("Error adding to cart:", err);
    return res.status(500).json({
      message: "Error adding to cart",
      error: err.message,
    });
  }
};

module.exports = addToCart;
