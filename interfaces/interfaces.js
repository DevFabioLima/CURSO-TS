"use strict";
function saudarComOla(pessoa) {
    console.log(`Ola ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Lucas';
}
const pessoa = {
    nome: 'Fabio',
    idade: 21,
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} e o sobrenome é ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Martins', altura: 1.90})
pessoa.saudar('Lima');
// Usando interface com Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} e o sobrenome é ${sobrenome}`);
    }
}
const cliente1 = new Cliente();
cliente1.nome = 'Cristiano';
saudarComOla(cliente1);
cliente1.saudar('Ronaldo');
console.log(cliente1.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(expoente).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
// No Java classes abastratas não precisam utilizar os métodos já no ts sim
class AbstrataBD {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map