const mongoose = require('mongoose');

const AutoresScheme = new mongoose.Schema(
    {
        idAutor: {

            type: String,
            requiere: [true, 'idAutor es requerido']

        },

        Autor: {

            type: String,
            requiere: [true, 'El Autor es requerido']

        },

    }

)

const Autores=mongoose.model('Autores',AutoresScheme);
module.exports=Autores;