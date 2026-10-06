const express = require("express");
const router = express.Router();

const {
    getAllEquipments,
    createEquipment,
    deleteEquipment
} = require("../controllers/equipmentController");

router.get("/", getAllEquipments);
router.post("/", createEquipment);
router.delete("/:id", deleteEquipment);

module.exports = router;
