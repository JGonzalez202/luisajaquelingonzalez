const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize("congreso_app","tese","1234",{
    host:"45.79.198.62",dialect:"mysql",port:"3306"
});

class usuarios extends Model{};

usuarios.init({
//const Usuarios = sequelize.define('usuarios', {
idusuario:{
   // type: DataTypes.UUID,
    type: DataTypes.INTEGER,
   // autoIncrement: true,
    primaryKey:true,
    allowNull:false
},
nombre:{ 
    type:DataTypes.STRING
},
paterno:{
    type:DataTypes.STRING
},
materno:{

    type:DataTypes.STRING
},
telefono:{
    type:DataTypes.STRING
},
correo:{
    type:DataTypes.STRING
},
contrasena:{
    type:DataTypes.STRING
},
id_perfil:{
    type:DataTypes.INTEGER
},
id_institutucion:{
    type:DataTypes.INTEGER
}
}, { 
    sequelize,
    modelName: 'usuarios',
    timestamps: false,
    freezeTableName: true
    /*createdAt: "createdAt",
    updatedAt: "updatedAt"*/

})
module.exports = usuarios

async function prueba_conexion(){
    try{
        await sequelize.authenticate();
        console.log("Conexión a la BD correcta")
    } catch(error){
        console.log("Conexión a la BD fallida", error)
    }
}

prueba_conexion();