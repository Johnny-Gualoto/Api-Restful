const mongoose = require('mongoose');

const EditorialScheme = new mongoose.Schema(
    {
        idEditorial: {

            type: String,
            requiere: [true, 'idEditorial es requerido']

        },

        Editorial: {

            type: String,
            requiere: [true, 'La Editorial es requerida']

        },

    }

)

const Editorial = mongoose.model('Editorial', EditorialScheme);
module.exports = Editorial;