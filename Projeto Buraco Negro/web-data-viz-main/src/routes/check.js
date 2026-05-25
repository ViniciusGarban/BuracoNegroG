var express = require("express");
var router = express.Router();

var checkController = require("../controllers/checkController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/checklist/:fk_usuario", function (req, res) {
    checkController.buscarCheck(req, res);
})


module.exports = router;