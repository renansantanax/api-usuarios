CREATE DATABASE db_usuarios;
GO

USE db_usuarios;
GO

CREATE TABLE usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    data_criacao DATETIME DEFAULT GETDATE()
);