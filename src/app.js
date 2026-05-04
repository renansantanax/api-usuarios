const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

//Criando a aplicação Express
const app = express();

//Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

//Registrando as rotas de usuário na aplicação
app.use("/api", usuarioRoutes);

//Exportando as configurações
module.exports = app;
