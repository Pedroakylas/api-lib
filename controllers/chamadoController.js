const chamadoService = require('../services/chamadoService');

function createInflateRaw(req, res){
    console.log('1 - CONTROLLER recebeu', req.boby);
    const chamado = chamadoService.criar(req.boby);
    res.status(201).json(chamado)
}

module.exports = {
    criar
};