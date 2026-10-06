const equipmentService = require("../services/equipmentService");

async function getAllEquipments(req, res) {
    try {
        const equipments = await equipmentService.getAllEquipments();
        res.json(equipments);
    } catch (error) {
        console.error("Erro ao buscar equipamentos: ", error);
        res.status(500).json({ message: "Erro ao buscar equipamentos." });
    }
}