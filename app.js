const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ruta_autores = require('./rutas/rutas')
const ruta_libros = require('./rutas/rutasLibros')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', ruta_autores);
app.use('/', ruta_libros)


module.exports = app;

///////////////////////////gaston rivata////////////////
// var alacena_routes = require('./routes/alacena-routes');
// var diario_routes = require('./routes/diario-routes');
// var receta_routes = require('./routes/receta-routes');
// var usuario_routes = require('./routes/usuario-routes');

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// app.use('/alacena', alacena_routes);
// app.use('/diario', diario_routes);
// app.use('/recetas', receta_routes);
// app.use('/usuario', usuario_routes);

// module.exports = app;

