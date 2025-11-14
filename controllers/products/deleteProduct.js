const Product = require("../../model/product");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Product ID is required",
        data: null,
      });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        data: null,
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      data: product,
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    return res.status(500).json({
      message: "Error deleting product",
      error: err.message,
    });
  }
};

module.exports = deleteProduct;
