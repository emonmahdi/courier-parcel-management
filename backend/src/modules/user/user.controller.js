const getProfile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      message: "Access granted",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const UserController = { getProfile };

module.exports = { UserController };
