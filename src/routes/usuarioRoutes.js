//Importando as dependências necessárias
const express = require("express");
const usuarioController = require("../controllers/usuarioController");
const authController = require("../controllers/authController");

///Criando uma instância do roteador do Express
const router = express.Router();

//Definindo as rotas para as operações de usuário
router.post("/usuarios", usuarioController.criar);
router.post("/auth/login", authController.login);

//Exportando o roteador para ser usado em outros arquivos
module.exports = router;
