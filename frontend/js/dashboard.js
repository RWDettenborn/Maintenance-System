console.log("Carregou o Dashboard ");

const SystemName = "Sistema de Controle de Manutenção";

let activeEquipments = 48;
let maintenanceEquipments = 5;
let preventiveMaintenance = 10;

console.log("Nome do sistema: " + SystemName);
console.info("Em manutenção" + maintenanceEquipments);

const equipments = [];
const equipmentsUrl = "http://localhost:3000/equipments";

const activeTotal = document.querySelector("#activesTotal");
const preventiveTotal = document.querySelector("#preventiveTotal");
const maintenanceEquipamentsTotal = document.querySelector("#maintenanceEquipmentsTotal");
const equipmentsTable = document.querySelector("#equipmentsTable")
const searchInput = document.getElementById("searchInput");
const btnNewEquipment = document.getElementById("btnNewEquipment");
const modalElement = document.getElementById("equipmentModal");
const modal = new bootstrap.Modal(modalElement);

console.log("activeTotal: "+ activeTotal.textContent);

// function dashboardRefresh() 
// {
//     const actives = equipments.filter(
//         equipment => equipment.status === "active"
//         ).length;

//     const inMaintenance = equipments.filter(
//         equipment => equipment.status === "maintenance"
//         ).length;

//     activeTotal.textContent = actives;
//     maintenanceEquipamentsTotal.textContent = inMaintenance;

//     console.log("Dashboard atualizado");
// }

// dashboardRefresh();

function equipmentsTableRender(list) {
    equipmentsTable.innerHTML="";

    list.forEach(equipment => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = equipment.name;
        const localCell = document.createElement("td");
        localCell.textContent = equipment.local;
        const statusCell = document.createElement("td");
        statusCell.textContent = equipment.status;
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "btn btn-danger";
        deleteButton.textContent = "Excluir";
        deleteButton.addEventListener("click", function () {
            equipmentDelete(equipment.id);
        });
        actionCell.appendChild(deleteButton);
        row.append(nameCell, localCell, statusCell, actionCell);

        equipmentsTable.appendChild(row);

    })
}

equipmentsTableRender(equipments);

searchInput.addEventListener("input", function (){
    const term = searchInput.value.toLowerCase();

    const result = equipments.filter(equipment => 
        equipment.name.toLowerCase().includes(term));

    equipmentsTableRender(result);
})

btnNewEquipment.addEventListener("click", function(){
    modal.show();
});

const btnSave = document.getElementById("btnSaveEquipment");
const equipmentName = document.getElementById("equipmentName");

btnSave.addEventListener("click", async function(){
    const name = equipmentName.value.trim();
    if (name === ""){
        console.warn("Nome do equipamento não informado");
        alert("Informe o nome do equipamento.");
        return;
    }

    btnSave.disabled = true;
    try {
        const response = await fetch(equipmentsUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Não foi possível salvar o equipamento.");
        }

        equipments.push(result);
        equipmentsTableRender(equipments);
        modal.hide();
        equipmentName.value = "";
    } catch (error) {
        console.error("Erro ao salvar equipamento:", error);
        alert(error.message || "Não foi possível salvar o equipamento.");
    } finally {
        btnSave.disabled = false;
    }
})

async function equipmentDelete(id){
    try {
        const response = await fetch(`${equipmentsUrl}/${id}`, { method: "DELETE" });
        if (!response.ok) {
            const result = await response.json();
            throw new Error(result.message || "Não foi possível excluir o equipamento.");
        }

        const index = equipments.findIndex(equipment => equipment.id === id);
        if (index !== -1) {
            equipments.splice(index, 1);
            equipmentsTableRender(equipments);
        }
    } catch (error) {
        console.error("Erro ao excluir equipamento:", error);
        alert(error.message || "Não foi possível excluir o equipamento.");
    }
}

async function equipmentsLoad() {
    try {
        const response = await fetch(equipmentsUrl);
        if (!response.ok) {
            throw new Error("Não foi possível carregar os equipamentos.");
        }

        const data = await response.json();
        equipments.splice(0, equipments.length, ...data);
        equipmentsTableRender(equipments);
    } catch (error) {
        console.error("Erro ao carregar equipamentos:", error);
        alert(error.message || "Não foi possível carregar os equipamentos.");
    }
}

equipmentsLoad();