var database = require("../database/config");

function salvarAcertos(fk_usuario, fk_capitulo, acertos) {
    var instrucaoSql = `
        INSERT INTO usuario_capitulo (fk_usuario, fk_capitulo, acertos)
        VALUES (${fk_usuario}, ${fk_capitulo}, ${acertos})
        ON DUPLICATE KEY UPDATE acertos = ${acertos};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDesempenho(fk_usuario) {
    var instrucaoSql = `
        SELECT fk_capitulo, acertos
        FROM usuario_capitulo
        WHERE fk_usuario = ${fk_usuario}
        ORDER BY fk_capitulo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarAcertos,
    buscarDesempenho
}