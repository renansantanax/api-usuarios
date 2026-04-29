//Importando as dependências necessárias
const usuarioService = require("../services/usuarioService");
const CriarUsuarioDTO = require("../dtos/criarUsuarioDto");

//Função para criar um novo usuário na API
async function criar(req, res) {
  try {
    //Capturando os dados do corpo da requisição e criando um DTO
    const dto = new CriarUsuarioDTO(
      req.body.nome, //Capturando o nome do usuário
      req.body.email, //Capturando o email do usuário
      req.body.senha, //Capturando a senha do usuário
    );

    //Chamando o serviço para criar o usuário e aguardando a resposta
    const usuario = await usuarioService.criarUsuario(dto);

    //Retornando a resposta com o status 201 (Criado) e os dados do usuário criado
    res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      usuario,
    });
  } catch (error) {
    return res.status(400).json({
      erro: error.message,
    });
  }
}

//Exportando as funções do controlador para serem usadas nas rotas
module.exports = {
  criar,
};
