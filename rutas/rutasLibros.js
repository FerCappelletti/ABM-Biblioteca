const express = require('express');
const librosControllers = require('../controllers/librosControllers')
const autorMiddlewares = require('../middlewares/autor_middlewares')
const librosMiddlewares = require('../middlewares/libros_middlewares');


const api = express.Router();

//////autores/:id/libros//GET: devuelve todos los libros de un autor//
api.get('/autores/:id/libros',autorMiddlewares.idAutor, librosControllers.getLibrosAutorById);
////POST: agrega un nuevo libro al autor//
api.post('/autores/:id/libros',autorMiddlewares.idAutor, librosControllers.agregarLibroAutorById)
//GET: devuelve el libro con el id indicado del autor
api.get('/autores/:id/libros/:idLibro',autorMiddlewares.idAutor, librosMiddlewares.libroById, librosControllers.getLibroById);
//PUT: modifica el libro con el id indicado del autor
api.put('/autores/:id/libros/:idLibro',autorMiddlewares.idAutor, librosMiddlewares.libroById, librosControllers.modificarLibroByAutorId)
///DELETE: eliminar el libro con el id indicado del autor///
api.delete('/autores/:id/libros/:idLibro',autorMiddlewares.idAutor, librosMiddlewares.libroById, librosControllers.deleteLibroByAutorId)

module.exports = api