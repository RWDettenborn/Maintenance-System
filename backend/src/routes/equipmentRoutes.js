const express = require("express");
const router = express.Router();

const {
    getAllEquipments
} = require("../controllers/equipmentControllers");

router.get("/", getAllEquipments);
// router.get("/:id", getEquipments);
// router.get("/:id", deleteEquipments);

module.exports = router;

