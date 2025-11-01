import PromptSync from 'prompt-sync';

let promptSync = PromptSync();

class Pessoa {
    /**
     *
     */

    //atributo privado
    #senha;
    #respostaChavePessoa;

    constructor(nome, idade, senha, respostaChavePessoa) {
        this.nome = nome;
        this.idade = idade;
        this.#senha = senha;
        this.#respostaChavePessoa = respostaChavePessoa;
    }

    apresentar() {
        console.log(`\nOlá, meu nome é ${this.nome}, sou nascido em ${this.dataNasc} e tenho ${this.idade} de idade.\n`);
    }

    get senha() {
        let respostaChavePessoa = promptSync("Qual o nome do seu PET? ");

        if (respostaChavePessoa == this.#respostaChavePessoa) {
            console.log(`Senha privada: ${this.#senha}`);
        }
        else {
            console.log(`Resposta incorreta!`);
        }
    }
}

class Aluno extends Pessoa {

    constructor(nome, idade, ra) {
        super(nome, idade);
        this.ra = ra;
    }

    apresentar() {
        console.log(`\nOlá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou aluno e meu RA é ${this.ra}.`);
    }

}

class Professor extends Pessoa {

    constructor(nome, idade, salario, registro) {
        super(nome, idade)
        this.salario = salario;
        this.registro = registro;
    }

    apresentar() {
        console.log(`\nOlá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou professor, meu salario é ${this.salario} e meu registro é ${this.registro}.`);
    }
}

let tipoPessoa = parseInt(promptSync("Digite 1 para professor ou digite 2 para aluno: "));

let pessoa;

if (tipoPessoa === 1) {
    let nomePessoa = promptSync("Digite seu nome: ");
    let idadePessoa = promptSync("Digite sua idade: ");

    let salario = promptSync("Qual o seu salario? ");
    let registro = promptSync("QUal o seu registro? ");

    pessoa = new Professor(
        nomePessoa,
        idadePessoa,
        salario,
        registro
    );

    console.log("\nBem vindo novo professor:");
}

else if (tipoPessoa === 2) {
    let nomePessoa = promptSync("Digite seu nome: ");
    let idadePessoa = promptSync("Digite sua idade: ");

    let ra = promptSync("Qual seu RA? ");

    pessoa = new Aluno(
        nomePessoa,
        idadePessoa,
        ra
    );
}

else {
    console.log("\nOpção inválida, digite 1 ou 2, tente novamente.\n");
    process.exit(0);
}

pessoa.apresentar()
console.log("\n");