const express=require('express');
const cors=require('cors');
const app=express();
const port=8000;

require('./server/config/mongoose.config')

//orrigen cruzado para llamar a las rutas
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//importacion del archivo de las rutas
const LibrosRoutes=require('./server/routes/libros.routes');
LibrosRoutes(app);


app.listen(port,()=>console.log("servidor escuchando por el puerto:",port));