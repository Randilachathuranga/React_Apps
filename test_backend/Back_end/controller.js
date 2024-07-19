const User = require("./User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id, name } = req.body;
  try {
    const updatedUser = await User.updateOne(
      { id: id },
      { $set: { name: name } }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.body.id;
  try {
    const response = await User.deleteOne({ id: id });
    if (response.deletedCount > 0) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
