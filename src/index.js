const app = require('./app/app')
const PORT = process.env.port || 3501;

app.listen(PORT,()=>{
    console.log('Servidor corriendo en puerto 3501')
})



