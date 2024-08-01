const mongoose = require('mongoose');

const LibrosScheme = new mongoose.Schema(
    {
        id: {

            type: String,
            requiere: [true, 'id es requerido']

        },

        Titulo: {
            type: String,
            requiere: [true, 'El titulo es requerido']


        },
        FechaPublicacion: {
            type: String,
            requiere: [true, 'La fecha de publicacion es requerida']


        },
        Autor: {
            type: String,
            requiere: [true, 'El autor es requerido']


        },
        Categoria: {
            type: String,
            requiere: [true, 'La categoria es requerida']


        },

        Editorial: {
            type: String,
            requiere: [true, 'El editorial es requerido']


        },

        Idioma: {
            type: String,
            requiere: [true, 'El idioma es requerido']


        },

        Paginas: {
            type: String,
            requiere: [true, 'El idioma es requerido']


        }


    }


)
const Libros=mongoose.model('Libros',LibrosScheme);
module.exports=Libros;