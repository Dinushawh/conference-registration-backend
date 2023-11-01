const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const connect = require("./database/connetion");
connect();

const attendeesRoutes = require("./routes/attendeesRoutes");

app.use("/api", attendeesRoutes);

app.on("error", (err) => {
  console.error("Server error:", err);
});

app.listen(PORT, function () {
  console.log("Server is running on port: " + PORT);
});
