const autores = require('../autores.json');

function libroById (req, res, next){
    const autor = req.autorById;
    const idLibro = parseInt(req.params.idLibro);
    const libros = autor.libros
    const libro = libros.find(element => element.id === idLibro);
    if(libro){
        req.libroById = libro;
        next()
    }else{
        res.status(404).send('Libro no existe')
    }
}



module.exports = {
    libroById,
}