//importa um pacote nativo do Node.js
const http = require("node:http");

//Define o endereço do meu servidor
const hostname = "127.0.0.1";

//Define a porta onde o servidor vai rodar
const port = 3000;

// Cria um servidor
const server = http.createServer((req, res)=>{
    // Corpo da funcao anonima, onde colocamos os códigos

    //Define o status do response
   req.statusCode = 200; 

   //Definindo headers
   //definindo tipo
   res.setHeader("Content-Type","text/plain");
   res.end("!Hello world!");
});

server.listen(port, hostname,()=>{
    console.log(`https://${hostname}:+${port}`);
});