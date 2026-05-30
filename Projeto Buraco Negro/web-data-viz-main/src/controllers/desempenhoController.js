var desempenhoModel = require("../models/desempenhoModel");

function salvarAcertos(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkCapitulo = req.body.fkCapituloServer;
    var acertos = req.body.acertosServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else if (fkCapitulo == undefined) {
        res.status(400).send("fkCapitulo está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("acertos está undefined!");
    } else {
        desempenhoModel.salvarAcertos(fkUsuario, fkCapitulo, acertos)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao salvar os acertos.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarDesempenho(req, res) {
    var fkUsuario = req.params.fk_usuario;

    desempenhoModel.buscarDesempenho(fkUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o desempenho.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvarAcertos,
    buscarDesempenho
}