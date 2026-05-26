var database = require("../database/config");

function buscarChecklist(fk_usuario, fk_capitulo) {

    var instrucaoSql = `        
        SELECT fk_capitulo, fk_usuario, lido
        FROM usuario_capitulo
        WHERE fk_usuario = ${fk_usuario}
        AND fk_capitulo = ${fk_capitulo};
`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
   buscarChecklist
}
