const mongoose = require('mongoose');

const CategoriasScheme = new mongoose.Schema(
    {
        idCategoria: {

            type: String,
            requiere: [true, 'idCategoria es requerido']

        },

        Categoria: {

            type: String,
            requiere: [true, 'La categoria es requerida']

        },

    }

)

const Categorias=mongoose.model('Categorias',CategoriasScheme);
module.exports=Categorias;