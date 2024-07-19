const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a simple route for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Get users
app.get("/users", (req, res, next) => {
  controller.getusers((error, users) => {
    if (error) {
      return next(error);
    }
    res.json(users);
  });
});

// Add user
app.post("/createusers", (req, res, next) => {
  controller.adduser(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    res.json(result);
  });
});

// Update user
app.post("/updateusers", (req, res, next) => {
  controller.updateuser(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    res.json(result);
  });
});

// Delete user
app.post("/deleteuser", (req, res, next) => {
  controller.deleteuser(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    res.json(result);
  });
});

module.exports = app;
