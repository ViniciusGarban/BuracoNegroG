var express = require("express");
var router = express.Router();

var checkController = require("../controllers/checkController");

router.get("/checklist/:fk_usuario/:fk_capitulo", function (req, res) {
    checkController.buscarChecklist(req, res);
})


module.exports = router;