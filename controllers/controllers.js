const autores = require('../autores.json')

//POST /autores//Si ya existe un autor con mismo nombre y apellido devuelve 409
//De lo contrario agrega el nuevo autor y devuelve 201 con el JSON correspondiente al autor
function createAutor(req, res) {
    const newAutor = req.body;
    const autorName = req.params.nombre;
    //const autorApellido = req.params.apellido;
    const autor = autores.find(element => element.nombre  === autorName);
    if(autor){
        res.status(409).send('Autor ya existe')
    }else{
        autores.push(newAutor);
        res.status(201).send(newAutor);
    }

}

function getAutores(req, res) {
    res.json(autores);
};

function getAutorById(req, res) {
    const autor = req.autorById
    if (autor) {
        res.json(autor);
    };
    res.status(404).send('Ese autor no existe');
}

//Si el autor no existe devuelve 404
//De lo contrario elimina el autor y devuelve 204
function deleteAutor(req, res) {
    const autor = req.autorById;
    if (autor) {
        let index = autores.indexOf(autor);
        autores.splice(index, 1)
        res.status(204).send('Autor borrado')

    }else {
        res.status(404).send('Autor no existe')
    }
};

function replaceAutor(req, res) {
    const newAutor = req.body;
    const autor = req.autorById;
    if (autor) {
        let index = autores.indexOf(autor);
        autores.splice(index, 1, newAutor)
        res.status(200).send(newAutor)

    }else{
        res.status(404).send('Autor no existe')
    }
}



module.exports = {
    createAutor,
    getAutorById,
    getAutores,
    deleteAutor,
    replaceAutor,
}




