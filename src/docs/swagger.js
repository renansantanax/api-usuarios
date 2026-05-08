const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Usuários",
    version: "1.0.0",
    description: "API NodeJS para cadastro e autenticação de usuários",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Servidor local",
    },
  ],
  tags: [
    {
      name: "Usuários",
      description: "Operações relacionadas aos usuários",
    },
    {
      name: "Autenticação",
      description: "Operações de login e geração de token JWT",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      UsuarioCadastro: {
        type: "object",
        required: ["nome", "email", "senha"],
        properties: {
          nome: {
            type: "string",
            example: "Sergio Mendes",
          },
          email: {
            type: "string",
            example: "sergio.coti@gmail.com",
          },
          senha: {
            type: "string",
            example: "@Admin123",
          },
        },
      },
      Login: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          email: {
            type: "string",
            example: "sergio.coti@gmail.com",
          },
          senha: {
            type: "string",
            example: "@Admin123",
          },
        },
      },
      UsuarioResposta: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          nome: {
            type: "string",
            example: "Sergio Mendes",
          },
          email: {
            type: "string",
            example: "sergio.coti@gmail.com",
          },
          data_criacao: {
            type: "string",
            example: "2026-05-04T11:27:34.400Z",
          },
        },
      },
      Erro: {
        type: "object",
        properties: {
          erro: {
            type: "string",
            example: "Mensagem de erro",
          },
        },
      },
    },
  },
  paths: {
    "/usuarios": {
      post: {
        tags: ["Usuários"],
        summary: "Cadastrar novo usuário",
        description: "Endpoint para cadastrar um novo usuário no sistema.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UsuarioCadastro",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Usuário criado com sucesso",
          },
          400: {
            description: "Erro de validação ou email já cadastrado",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Autenticação"],
        summary: "Autenticar usuário",
        description: "Endpoint para realizar login e gerar token JWT.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login realizado com sucesso",
          },
          400: {
            description: "Email e senha são obrigatórios",
          },
          401: {
            description: "Credenciais inválidas",
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
