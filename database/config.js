const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN);

        console.log("Se realizo la conexion")
    } catch (error) {
        throw new Error ('Error al realizar la conexion a la base de datos')
    }
}


module.exports = {
    dbConnection
}