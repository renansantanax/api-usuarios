//Classe para representar os dados (DTO - Data Transfer Object)
//necessários para login do usuário
class LoginUsuarioDto {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }
}

module.exports = LoginUsuarioDto;
