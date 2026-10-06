const equipments = [
    {
        id:1,
        name: "Compressor",
        local: "Oficina",
        status: "active",
        patrimony: "001-PP"
    },{
        id:2,
        name: "Gerador 1",
        local: "Oficina",
        status: "active",
        patrimony: "002-PP"
    },{
        id:3,
        name: "Compressor 5444",
        local: "Oficina",
        status: "active",
        patrimony: "003-PP"
    }
];

function getAllEquipments(req,res){
    res.json(equipments);
};

function createEquipment(req, res) {
    const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
    if (!name) {
        return res.status(400).json({ message: "Informe o nome do equipamento." });
    }

    const id = equipments.reduce((maxId, equipment) => Math.max(maxId, equipment.id), 0) + 1;
    const newEquipment = {
        id,
        name,
        local: "Não informado",
        status: "active",
        patrimony: `${String(id).padStart(3, "0")}-PP`
    };

    equipments.push(newEquipment);
    return res.status(201).json(newEquipment);
}

function deleteEquipment(req, res) {
    const id = Number(req.params.id);
    const index = equipments.findIndex(equipment => equipment.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Equipamento não encontrado." });
    }

    equipments.splice(index, 1);
    return res.status(204).end();
}

module.exports = {
    getAllEquipments,
    createEquipment,
    deleteEquipment
};