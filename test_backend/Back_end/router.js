const express = require("express");
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require("./controller");

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
router.get("/users", getUsers);
router.post("/users", addUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
