const mongoose = require("mongoose");
const User = require("../../model/user.js");
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User deleted successfully",
      deletedUser: existingUser,
    });
  } catch (err) {
    console.error("Error deleting user:", err.message);
    res.status(500).json({ message: err.message });
  }
};
module.exports = deleteUser;
