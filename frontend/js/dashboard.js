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

const activeTotal = document.querySelector("#activeTotal");
const preventiveTotal = document.querySelector("#preventiveTotal")

console.log("#activeTotal: " + activeTotal.textContent);
activeTotal.textContent = 50;