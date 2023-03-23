require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./db/connection");
const router = require("./routes/route");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const PORT = 8080;

app.use("/api", router);

connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connect to ${PORT}`);
        app.get("/", (req, res) => {
          res.status(201).json("Home GET Request");
        });
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });
