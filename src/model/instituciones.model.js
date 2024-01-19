const {Sequelize, Model, DataTypes } = require ("sequelize")
const sequelize = new Sequelize("congreso_app","tese","1234",{
    host:"45.79.198.62",dialect:"mysql",port:"3306"
});

class instituciones extends Model{}

instituciones.init({
    idcat_instituciones: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull:false
    },
    descripcion: {
        type: DataTypes.STRING
    }},
    {
        sequelize,
        modelName: 'cat_institucion',
        timestamps: false,
        freezeTableName: true
    }
)
module.exports = instituciones

async function prueba_conexion(){
    try{
        await sequelize.authenticate();
        console.log("Conexión a la BD correcta")
    } catch(error){
        console.log("Conexión a la BD fallida", error)
    }
}

prueba_conexion();