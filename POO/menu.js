import PromptSync from 'prompt-sync';

let promptSync = PromptSync();

class Pessoa {
    /**
     *
     */

    //atributo privado
    #senha;
    #respostaChavePessoa;

    constructor(nome, idade, dataNasc, senha, respostaChavePessoa) {
        this.nome = nome;
        this.idade = idade;
        this.dataNasc = new Date(dataNasc).toLocaleDateString("pt-br");
        this.#senha = senha;
        this.#respostaChavePessoa = respostaChavePessoa
    }

    apresentar(){
        console.log(`\nOlá, meu nome é ${this.nome}, sou nascido em ${this.dataNasc} e tenho ${this.idade} de idade.\n`);
    }

    get senha(){
        let respostaChavePessoa = promptSync("Qual o nome do seu PET? ");
        
        if(respostaChavePessoa == this.#respostaChavePessoa){
            console.log(`Senha privada: ${this.#senha}`);
        }
        else{
            console.log(`Resposta incorreta!`);
        }
    }
}

let nomePessoa = promptSync("Digite seu nome: ");
let idadePessoa = promptSync("Digite sua idade: ");
let dataNascimentoPessoa = promptSync("Digite sua data de nascimento no formato ano-mês-dia: ");
let senhaPessoa = promptSync("Digite sua senha: ");
let respostaChavePessoa = promptSync("Qual o nome do seu PET? ");

const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    //new Date(1997,11,21),
    dataNascimentoPessoa,
    senhaPessoa,
    respostaChavePessoa
);


//ver senha
let verSenha = promptSync("Deseja ver sua senha? S/N ");

if(verSenha == 'S')
    novaPessoa.senha;

console.log(novaPessoa);