//Importando a aplicação configurada no app.js
const app = require("./app");

//Carregando as variáveis de ambiente do arquivo .env
require("dotenv").config();

//Definindo a porta em que o servidor irá rodar
const port = process.env.PORT || 3000;

//Inicializando a aplicação
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Acesse a API em http://localhost:${port}/api`);
});
