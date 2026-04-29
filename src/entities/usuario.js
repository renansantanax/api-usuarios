//Classe de entidade para o usuário
class Usuario {
  //Método construtor para criar um novo usuário
  constructor(id, nome, email, senha, dataCriacao) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCriacao = dataCriacao;
  }
}

module.exports = Usuario;
