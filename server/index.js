const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Router/UserRouter");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const URL = process.env.CONNECTTDB_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established");
});

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
