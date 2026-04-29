//Importando os recursos do arquivo de configuração do banco de dados
const { sql, getConnection } = require("../config/database");

//Função para cadastrar um novo usuário
async function criar(usuario) {
  //Obtém a conexão com o banco de dados
  const pool = await getConnection();

  //Executa a query de inserção do novo usuário
  const result = await pool
    .request()
    .input("nome", sql.VarChar(150), usuario.nome)
    .input("email", sql.VarChar(50), usuario.email)
    .input("senha", sql.VarChar(100), usuario.senha).query(`
                INSERT INTO usuarios (nome, email, senha)
                OUTPUT INSERTED.id, INSERTED.nome, INSERTED.email, INSERTED.data_criacao
                VALUES (@nome, @email, @senha)
            `);

  //Retorna os dados do usuário criado
  return result.recordset[0];
}

module.exports = {
  criar,
};
