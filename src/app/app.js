
const express = require("express");
const app = express();
app.use(express.json())
const router = require('../router/router.users')
const morgan = require("morgan");

app.get('/api',(req,res)=>{
    res.send('Iniciando petición');
});
app.use("/api/v1",router)

module.exports=app;


