const bcrypt = require("bcrypt");
const User = require("../../model/user");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        data: null,
      });
    }

    const DB_users = await User.find({}, { __v: 0 });
    const user = DB_users.find(({ email: user_email }) => user_email == email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
        data: null,
      });
    }

    return res.status(200).json({
      message: "Login successful",
      data: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({
      message: "Error during login",
      error: err.message,
    });
  }
};

module.exports = login;
