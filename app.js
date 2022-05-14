const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const Mongo_url = process.env.SHOPPING_MONGO_DB;

mongoose.connect(Mongo_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connected..!!");
});

const userDetails = require("./Routes/UserRegisteRotes");
app.use("/userDetails", userDetails);

app.listen(port, () => {
  console.log("Connected to port", port);
});
