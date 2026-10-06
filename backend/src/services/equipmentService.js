const prima = require("../database/prisma");

async function getAllEquipments() {
    return await prima.equipment.findMany({
        orderBy: {id: "desc"}
    });
};

async function getEquipmentById(id) {
    return await prima.equipment.findUnique({
        where: {id}
    });
};

async function createEquipment(data) {
    return await prima.equipment.create({
        data
    });
};

async function updateEquipment(id, data) {
    return await prima.equipment.update({
        where: {id},
        data
    });
};

async function deleteEquipment(id) {
    return await prima.equipment.delete({
        where: {id}
    });
};

module.exports = {
    getAllEquipments,
    getEquipmentById,
    createEquipment,
    updateEquipment,
    deleteEquipment
};