const autores = require('../autores.json');

function checkAutores(req, res, next){

    if(autores == typeof Array){
        res.status(200).send(autores)
    }
    next()
}

//GET /autores/:id/
function idAutor(req, res, next){
    const idAutor = parseInt(req.params.id);
    const autor = autores.find(element => element.id === idAutor);
    if(autor){
        req.autorById = autor;

        next()
    }else{
        res.status(404).send('Autor no existe')
    }
};



module.exports = {
    checkAutores,
    idAutor
}