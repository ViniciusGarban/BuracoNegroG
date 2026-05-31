CREATE DATABASE buraco_negro;
USE buraco_negro;

CREATE TABLE usuario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  senha VARCHAR(50)
);

CREATE TABLE perfil_usuario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nivel_estudo VARCHAR(30),
  fk_usuario INT UNIQUE,
  FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE capitulo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) UNIQUE,
  descricao VARCHAR(255)
);

CREATE TABLE pergunta (
  id INT PRIMARY KEY AUTO_INCREMENT,
  enunciado VARCHAR(255),
  alternativa_a VARCHAR(100),
  alternativa_b VARCHAR(100),
  alternativa_c VARCHAR(100),
  alternativa_d VARCHAR(100),
  alternativa_e VARCHAR(100),
  resposta_correta CHAR(1),
  fk_capitulo INT,
  FOREIGN KEY (fk_capitulo) REFERENCES capitulo(id)
);

CREATE TABLE usuario_capitulo (
  fk_usuario INT,
  fk_capitulo INT,
  lido TINYINT DEFAULT 0,
  acertos INT DEFAULT 0,
  PRIMARY KEY (fk_usuario, fk_capitulo),
  FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
  FOREIGN KEY (fk_capitulo) REFERENCES capitulo(id)
);
