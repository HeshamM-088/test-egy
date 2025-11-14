const User = require("../../model/user");

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required",
        data: null,
      });
    }

    const user = await User.findById(id, { __v: 0, password: 0 });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        data: null,
      });
    }

    return res.status(200).json({
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    console.error("Error getting user:", err);
    return res.status(500).json({
      message: "Error getting user",
      error: err.message,
    });
  }
};

module.exports = getOneUser;
