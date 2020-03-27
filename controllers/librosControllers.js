
const autores = require('../autores.json')
//GET: devuelve todos los libros de un autor//

function getLibrosAutorById(req, res) {
    const autor = req.autorById;
    let libros = autor.libros;
    res.status(200).send(libros)
}

////POST: agrega un nuevo libro al autor
function agregarLibroAutorById(req, res) {
    const autor = req.autorById;
    let libroAgregado = req.body;

    autor.libros.push(libroAgregado);
    res.status(201).send(`${libroAgregado.titulo} agregado correctamente a ${autor.nombre}`)

}

//GET: devuelve el libro con el id indicado del autor
function getLibroById(req, res) {
    const libro = req.libroById;
        res.status(200).send(libro)
}
//PUT: modifica el libro con el id indicado del autor
////(`El libro modificado es ${libro.titulo} me sale undefined////
function modificarLibroByAutorId(req, res) {
    const libros = req.autorById.libros;
    const libro = req.libroById;
    const newLibro = req.body;
    let index = libros.indexOf(libro);

        libros.splice(index, 1, newLibro)
        res.status(200).send('El nuevo libro es ' + newLibro)

}
///DELETE: eliminar el libro con el id indicado del autor///
function deleteLibroByAutorId(req, res) {
    const libros = req.autorById.libros;
    const libro = req.libroById;
    let index = libros.indexOf(libro);

        libros.splice(index, 1,)
        res.status(200).send('Libro eliminado')
}

module.exports = {
    getLibrosAutorById,
    agregarLibroAutorById,
    getLibroById,
    modificarLibroByAutorId,
    deleteLibroByAutorId
}