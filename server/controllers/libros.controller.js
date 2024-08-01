const { response } = require('express');
const Libros = require('../models/libros.model');


//Para crear los libros
module.exports.createLibros = (request, response) => {

    const { id, Titulo, FechaPublicacion, Autor, Categoria, Editorial, Idioma, Paginas } = request.body;
    Libros.create({
        id, Titulo, FechaPublicacion, Autor, Categoria, Editorial, Idioma, Paginas
    })
        .then(libros => response.json({ insertedLibros: libros, msg: 'creacion exitosa' }))
        .catch(err => response.status(400).json(err));
}

//para devolver todos los libros
module.exports.gettAllLibros=(_, response) => {
    Libros.find({})
    .then(retrievedlibros=>response.json(retrievedlibros))
    .catch(err=>response.json(err));
}

//buscar un libro
module.exports.gettLibro=(request, response) => {
    Libros.findOne({_id:request.params.id})
    .then(retrievedlibro=>response.json(retrievedlibro))
    .catch(err=>response.json(err));
}
//actualizar
module.exports.updateLibros=(request,response)=>{
    Libros.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(updatedLibros=>response.json(updatedLibros))
    .catch(err=>response.json(err));

}

//Eliminar
module.exports.deleteLibros=(request,response)=>{
    Libros.deleteOne({_id:request.params.id})
    .then(librosDeleted=>response.json(librosDeleted))
    .catch(err=>response.json(err));

}

