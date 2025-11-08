import express from "express";

const app = express();
app.use(express.json())

let frutas = [];

app.get("/", (req, res) => {
    res.end("Primeiro dia com node");
});

app.get("/usuario/:id", (req, res) => {
    let idUsuario = req.params.id;

    res.end(`Usuario: ${idUsuario}`);
});

app.get("/usuario/:nome/:curso", (req, res) => {
    let nome = req.params.nome;
    let curso = req.params.curso;
           
    let obj = {
        nome : nome,
        curso : curso
    };

    res.send(`Os dados do objeto são Nome: ${obj.nome} e curso: ${obj.curso}`);
});

// app.get("/frutas/", (req, res) => {
//     res.send(frutas);
// });

// app.get("/frutas/:nomeFruta", (req, res) => {
//     frutas.push(req.params.nomeFruta);
//     res.end();
// });

app.get("/frutas/", (req, res) => {
    res.send(frutas);
});

app.post("/fruta", (req, res) => {
    const nomeFruta  = req.body.nomeFruta;
    frutas.push(nomeFruta);

    const objRetorno = {
        mensagem: "Fruta adicionada!",
        frutas
    };

    res.send(objRetorno);
})

app.put("/fruta/:posicao", (req, res) => {
    const posicao  = req.params.posicao;
    const nomeFruta  = req.body.nomeFruta;

    frutas[posicao] = nomeFruta;

    const objRetorno = {
        mensagem: "Fruta alterada!",
        frutas
    };

    res.send(objRetorno);
})

app.delete("/fruta/:posicao", (req, res) => {
    const posicao  = req.params.posicao;

    frutas.splice(posicao,1);

    const objRetorno = {
        mensagem: "Fruta deletada!",
        frutas
    };

    res.send(objRetorno);
})


app.listen(3000, () =>{
    console.log("Iniciando API")
})