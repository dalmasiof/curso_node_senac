//objeto
let pessoa = {
    nome : "Dalmasio Fernandes",
    dataNasc : new Date(1997,11,21).toLocaleDateString("pt-BR"),
    altura : 1.69,
    peso : 89,
    senha : "1234",
    idade : 27,

    VerificarMaioridade(){
        return this.idade >= 18;
    }, 
    Apresentar(){
        return `Olá meu nome é ${this.nome}, sou nascido em ${this.dataNasc} e tenho ${this.idade} anos.`
    }
};

console.log(pessoa.Apresentar());