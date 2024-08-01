const LibrosController=require('../controllers/libros.controller');

//creacion de Rutas para ser llamadas
module.exports=function(app){
    app.post('api/libros/new',LibrosController.createLibros);
    app.get('api/libros',LibrosController.gettAllLibros);
    app.get('api/libro/:id',LibrosController.gettLibro);
    app.put('api/libro/:id',LibrosController.updateLibros);
    app.delete('api/libro/:id',LibrosController.deleteLibros);

}
