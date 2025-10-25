use DB_biblioteca;

CREATE TABLE tb_livro(
	id_livro INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano_publicacao DATE NOT NULL
);

CREATE TABLE tb_cliente(
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone CHAR(13) NULl,
    numero_celular CHAR(14) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    endereco VARCHAR(255)
);