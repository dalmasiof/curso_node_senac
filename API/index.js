import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Primeiro dia com node");
});

app.listen(3000, () =>{
    console.log("Iniciando API")
})