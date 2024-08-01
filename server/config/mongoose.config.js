const mongoose = require('mongoose');
const db_name = 'App1';
mongoose.connect(`mongodb://127.0.0.1/${db_name}`,
    {
        /*
        userNewUrlParser: true,
        useUnifiedTopology: true,
        */
    }
)
    .then(()=>console.log(`Conexion establecidad a la base de datos ${db_name}`))
    .catch(err=> console.log("Error al conectarse a la base de datos",err))