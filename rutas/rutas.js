const express = require('express');
const autoresControllers = require('../controllers/controllers')
const autoresMiddlewares = require('../middlewares/autor_middlewares')
const api = express.Router();

api.post('/autores',autoresControllers.createAutor);
api.get('/autores',  autoresMiddlewares.checkAutores, autoresControllers.getAutores);
api.put('/autores/:id',autoresMiddlewares.idAutor, autoresControllers.replaceAutor);
api.get('/autores/:id',autoresMiddlewares.idAutor, autoresControllers.getAutorById);
api.delete('/autores/:id',autoresMiddlewares.idAutor, autoresControllers.deleteAutor);



module.exports = api
//api.post('/login', UsuarioController.getUsuarioByUsuario);

