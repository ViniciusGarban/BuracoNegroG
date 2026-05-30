var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.post("/salvar", function (req, res) {
    desempenhoController.salvarAcertos(req, res);
});

router.get("/buscar/:fk_usuario", function (req, res) {
    desempenhoController.buscarDesempenho(req, res);
});



module.exports = router;