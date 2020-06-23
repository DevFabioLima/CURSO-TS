"use strict";
// EXERCICIO 01
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        return console.log('Tooooooooot!');
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
let moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// EXERCIO 02
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
let retangulo1 = new Retangulo(5, 7);
console.log(retangulo1.area());
// EXERCIO 03
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
    }
}
const estagiario2 = new Estagiario;
estagiario2.primeiroNome = "Fabio Lucas";
console.log(estagiario2);
//# sourceMappingURL=desafio.js.map