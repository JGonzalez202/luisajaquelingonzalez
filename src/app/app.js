
const express = require("express");
const app = express();
app.use(express.json())
const router = require('../router/router.users')
const morgan = require("morgan");
const cors = require('cors');

// Permitir solicitudes desde http://localhost:8101
app.use(cors({
  origin: 'http://localhost:8100'
}));

app.get('/api',(req,res)=>{
    res.send('Iniciando petición');
});
app.use("/api/",router)

module.exports=app;





