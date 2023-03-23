const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const PORT = 8080;

app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

app.listen(PORT, () => {
  console.log(`Server connect to ${PORT}`);
});
