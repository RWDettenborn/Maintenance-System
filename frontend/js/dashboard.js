console.log("Carregou o Dashboard ");

const SystemName = "Sistema de Controle de Manutenção";

let activeEquipments = 48;
let maintenanceEquipments = 5;
let preventiveMaintenance = 10;

console.log("Nome do sistema: " + SystemName);
console.info("Em manutenção" + maintenanceEquipments);

const equipments = [
    {   id:1,
        name: "Compressor",
        local: "Oficina",
        status: true,
        patrimony: "12-PP",
    },
    {   id:2,
        name: "Torno",
        local: "Oficina",
        status: true,
        patrimony: "1-PP",    
    },
    {   id:3,
        name: "Gerador",
        local: "Casa de Maquinas",
        status: false,
        patrimony: "65-PP",
    }
];
console.table(equipments);

const activeTotal = document.getElementById("activesTotal").textContent = activeEquipaments;

const preventiveTotal = document.getElementById("preventivesTotal").textContent = preventiveMaintenance;

const maintenance = document.getElementById("maintenanceEquipaments total");

function dashboardRefresh() 
{
    const actives = equipaments.filter(equipament => equipament.status === "active").length;

    const inMaintenance = equipaments.filter(equipament => equipament.status === "maintenance").length;

    activeTotal.textContent = actives;
    maintenanceEquipamestTotal.textContent = inMaintenance;

    console.log("Dashboard atualizado");
}