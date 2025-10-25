USE db_biblioteca;


INSERT INTO tb_cliente (nome, email, cpf, telefone, numero_celular, data_nascimento, endereco) 
				values ("Dalmasio", "dalmasio@email.com", "123.456.789-11", "(11)3972-1976", "(11)96345-6258", "1997-12-21", "Rua Tito, Lapa, 123456789");
SELECT * FROM tb_cliente;

INSERT INTO tb_livro values (0, "Harry Potter", "J. K. Rowling", "2000-01-01");
INSERT INTO tb_livro (titulo, autor, ano_publicacao) values ("Game of Thrones", "George R. Martin", "2010-01-01");
SELECT * FROM tb_livro;

