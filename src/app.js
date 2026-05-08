const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./docs/swagger");
const usuarioRoutes = require("./routes/usuarioRoutes");

//Criando a aplicação Express
const app = express();

//Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

//Rota para documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Registrando as rotas de usuário na aplicação
app.use("/api", usuarioRoutes);

//Exportando as configurações
module.exports = app;
