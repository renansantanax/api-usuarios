//Importando a biblioteca mssql para conectar no banco de dados SQL Server
const sql = require("mssql");

//Carregando as variáveis de ambiente do arquivo .env
require("dotenv").config();

//Configuração para conectar no banco de dados SQL Server
const dbConfig = {
  user: process.env.DB_USER, //Usuário do banco de dados
  password: process.env.DB_PASS, //Senha do banco de dados
  server: process.env.DB_SERVER, //Servidor do banco de dados
  port: parseInt(process.env.DB_PORT), //Porta do banco de dados
  database: process.env.DB_NAME, //Nome do banco de dados
  options: {
    encrypt: false, //Desativa a criptografia
    trustServerCertificate: true, //Confia no certificado do servidor
  },
};

let pool; //Variável para armazenar a conexão com o banco de dados

//Função para conectar no banco de dados
async function getConnection() {
  if (!pool) {
    //Se a conexão ainda não foi estabelecida
    //Estabelece a conexão com o banco de dados e armazena na variável pool
    pool = await sql.connect(dbConfig);
  }

  return pool; //Retorna a conexão com o banco de dados
}

//Exportar as funções e objetos necessários para outros arquivos
module.exports = {
  sql, //Exporta a biblioteca mssql para ser utilizada em outros arquivos
  getConnection, //Exporta a função getConnection para ser utilizada em outros arquivos
};
