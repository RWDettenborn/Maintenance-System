const express = require('express');
const cors = require('cors');
const app = express();

// Habilita o CORS para todas as origens
app.use(cors());

app.get('/dashboard', (req, res) => {

    const indicators = {
    activeEquips:48,
    inMaintenance:7,
    preventiveMaintenance:2
    };
    res.writeHead(200,{
    "Content-Type":"application.json"
    });
    res.end(JSON.stringify(indicators));
        
    return;
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


// const PORT = 3000;

// const server = http.createServer((req,res) =>{

//     console.log("Método:",req.method);
//     console.log("URL:", req.url);

//     if(req.url === "/"){
//         res.writeHead(200,{
//             "Content-Type":"text/plain"
//         });
//         res.end("API do sistemas de manutenção!");
//         return;
//     }

//     if(req.url === "/dashboard"){
//         const indicators = {
//             activeEquips: 48,
//             inMaintenance: 7,
//             preventiveMaintenance: 2
//         };
//         res.writeHead(200, {
//             "Content-Type": "application/json"
//         });

//         res.end(JSON.stringify(indicators));
//         return;
//     }

//     res.writeHead(404,{
//         "Content-Type": "text/plain"
//     });

//     res.end("Rota não encontrada!");
// });

// server.listen(PORT, () => {

//     console.log(`Servidor iniciado em http://localhost:${PORT}`);
// });
