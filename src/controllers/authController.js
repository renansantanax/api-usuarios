const usuarioService = require("../services/usuarioService");
const LoginUsuarioDTO = require("../dtos/loginUsuarioDto");

//Função para realizar o login do usuário
async function login(req, res) {
  try {
    //Chamando o serviço para realizar o login
    const dto = new LoginUsuarioDTO(req.body.email, req.body.senha);

    const resultado = await usuarioService.login(dto);

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({
      erro: error.message,
    });
  }
}

module.exports = {
  login,
};
