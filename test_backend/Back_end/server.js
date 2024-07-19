const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

const port = 3001;
const host = "localhost";

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://randila:randila1212@cluster0.ujoxhzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

connect();

app.use("/api", router);

const server = app.listen(port, host, (err) => {
  if (err) {
    return console.error("Error starting server:", err);
  }
  console.log(`Node server is listening at http://${host}:${port}`);
});
