require("dotenv").config();
const express = require("express");
const app = express();
const apiVersion = "/api/v1";
const PORT = process.env.PORT;
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./route/route");

app.use(morgan("dev"));

app.use(express.json());
mongoose.connect(`${process.env.CONNECTION_STRING}`).then(() => {
  console.log("Database connection is successfull");
});

app.use(`${apiVersion}`, router);

app.use((error, req, res, next) => {
  const err = error ? error.toStringfy() : "something wend wrong";
  res.status(500).json({ message: err });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
