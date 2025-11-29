import { Sequelize } from 'sequelize';
import "dotenv/config.js";

// const sequelize = new Sequelize("mysql://root@localhost:3306/db_anotaai");
const DB_NOME = process.env.DB_NOME;
const DB_USUARIO = process.env.DB_USUARIO;
const DB_SENHA = process.env.DB_SENHA;
const DB_HOST = process.env.DB_HOST;
const DB_PORTA = process.env.DB_PORTA;

const sequelize = new Sequelize(
    DB_NOME,
    DB_USUARIO,
    DB_SENHA,
    {
        dialect: 'mysql',
        host: DB_HOST,
        port: DB_PORTA
    }
);

// sequelize.query("select * from tb_anotacao")
//     .then(([resultados]) => {
//         console.log(resultados);
//     })
//     .catch(error =>
//         console.error("Erro na consulta: " + error)
//     )

export { sequelize };