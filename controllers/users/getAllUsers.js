const User = require("../../model/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { __v: 0, password: 0 });

    return res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    console.error("Error getting users:", err);
    return res.status(500).json({
      message: "Error getting users",
      error: err.message,
    });
  }
};

module.exports = getAllUsers;

