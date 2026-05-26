var checkModel = require("../models/checkModel");

function buscarChecklist(req, res) {

    var fkUsuario = req.params.fk_usuario;
    var fkCapitulo = req.params.fk_capitulo;

    checkModel.buscarChecklist(fkUsuario, fkCapitulo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function marcarChecklist(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkCapitulo = req.body.fkCapituloServer;
    var lido = req.body.lidoServer;

     if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");

    } else if (fkCapitulo == undefined) {
        res.status(400).send("fkCapitulo está undefined!");

    } else if (lido == undefined) {
        res.status(400).send("lido está undefined!");

    } else {
        checkModel.marcarChecklist(fkUsuario, fkCapitulo, lido)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao marcar o checklist.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}



module.exports = {
    buscarChecklist,
    marcarChecklist

}
