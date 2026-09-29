const express = require("express");
const app = express();

const equipmentRoutes = require("./routes/equipmentRoutes");
app.use("/equipments", equipmentRoutes);

module.exports = app;