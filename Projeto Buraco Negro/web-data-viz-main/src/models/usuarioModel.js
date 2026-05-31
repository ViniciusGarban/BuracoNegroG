var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD esta rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrucao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, nivelEstudo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD esta rodando corretamente. \n\n function cadastrar():", nome, email, senha, nivelEstudo);

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando a instrucao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            var idUsuario = resultado.insertId;

            var instrucaoPerfil = `
                INSERT INTO perfil_usuario (nivel_estudo, fk_usuario)
                VALUES ('${nivelEstudo}', ${idUsuario});
            `;

            console.log("Executando a instrucao SQL: \n" + instrucaoPerfil);
            return database.executar(instrucaoPerfil);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
