"use strict";
// string
let nome = 'Lucas';
console.log(nome);
// nome = 28
// numbers
let idade = 20;
idade = 20.10;
// idade = 'Fabio'
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade = 10;
minhaIdade = 20;
console.log(minhaIdade);
console.log(typeof minhaIdade);
// minhaIdade = '28'
// array 
let hobbies = ["Cozinhar", "Jogar Bola"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [10, 20, 30];
// hobbies = 100
console.log(hobbies);
// Tuplas
let endereco = ["Av Xavante", 99, "Rua 10"];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BWM', ano: 2019 };
console.log(carro);
// Funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
// Tipo função 
let calculo;
calculo = multiplicar;
console.log(calculo(5, 10));
// Objetos
let usuarios;
// usuarios = {}
// usuario = {
// name: 'Jose',
// age: 22
// }
usuarios = {
    nome: 'Fabio',
    idade: 20
};
console.log(usuarios);
// OUTRA SOLUÇÃO MENOS CODIGO
let funcionario2 = {
    supervisores: ["Jose", "Martins"],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do ponto';
        }
    }
};
console.log(funcionario2.baterPonto(10));
let funcionario10 = {
    supervisores: ["Fabio", "Lima"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Horario normal";
        }
        else {
            return "Fora do horario";
        }
    }
};
console.log(funcionario10.baterPonto(7));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// Never mocando erros
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
//produto.validarProduto()
// VALOR NULL
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fabio',
    tel1: '9827361',
    tel2: null
};
console.log(contato1.tel2);
let podeSerNulo = null; //any
podeSerNulo = 12;
podeSerNulo = 'XYZ';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
    sacar(valor) {
        this.saldo -= valor;
    }
};
let correntista = {
    nome: 'José João',
    contaBancaria: contaBancaria,
    contatos: ['1234', '12345']
};
correntista.contaBancaria.depositar(100);
correntista.contaBancaria.sacar(200);
console.log(correntista);
//# sourceMappingURL=tipos.js.map