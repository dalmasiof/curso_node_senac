import express from "express";
import { sequelize } from "./config/db_connection.js"

const app = express();
app.use(express.json());

const port = process.env.API_PORTA;

sequelize.authenticate()
    .then(() => console.log("Banco autenticado com sucesso!"))
    .catch(() => console.error("Erro na autenticação: "))

app.listen(port, () => {
    console.log(`Serviço rodando na porta: ${port}`)

});
