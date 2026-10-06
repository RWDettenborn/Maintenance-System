const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const equipmentRoutes = require("./routes/equipmentRoutes");
app.use("/equipments", equipmentRoutes);

module.exports = app;