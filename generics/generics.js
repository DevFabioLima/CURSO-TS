"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Fabio').length);
// undefined e sem error pq objeto é type any
console.log(echo(27).length);
console.log(echo({ nome: 'Fabio', idade: 21 }));
// Usando generics 
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Fabio').length);
// ERRO: Automaticamente ele já sabe que o number não tem length
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Fabio', idade: 21 }));
//Generics disponiveis na API
const avaliacoes = [10, 9.5, 7.3];
avaliacoes.push(9.8);
// avaliacoes.push('10')
console.log(avaliacoes);
//ARRAYS
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([3, 2, 1]);
imprimir(['Fabio', 'Lucas', 'Martins']);
imprimir([
    { nome: 'Messi', idade: 32 },
    { nome: 'CR7', idade: 35 }
]);
imprimir([
    { nome: 'Neymar', idade: 29 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// CLASSE COM GENERICS
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
const soma1 = new SomaBinaria(5, 10);
console.log(soma1.executar());
// EXERCICIO CLASSE DIFERENÇA DATAS
class DiferencaEntreData extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias(s)`;
    }
}
const d1 = new Data(1, 6, 2020);
const d2 = new Data(17, 12, 2020);
const diferenca1 = new DiferencaEntreData(d1, d2);
console.log(diferenca1.executar());
// DESAFIO FILA
// ATRIBUTO: FILA ARRAY
// MÉTODOS: Entrar, Proximo, Imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(item) {
        this.fila.push(item);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila1 = new Fila(1, 2, 3);
fila1.imprimir();
fila1.entrar(10);
fila1.imprimir();
console.log(fila1.proximo());
fila1.imprimir();
// Desafio Mapa
// Array de Objetos (chave/valor) -> itens
// Métodos: obter(Chave), colocar({C, V})
// Limpar(), Imprimir
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    findEqualItens(n) {
        const tem = this.itens.filter((item) => item.chave === n);
        return tem;
    }
    colocar(novo) {
        const tem = this.findEqualItens(novo.chave);
        if (tem.length >= 1) {
            const position = tem.map((item, index) => {
                return {
                    number: index
                };
            });
            this.itens.splice(position[0].number, 1);
            this.itens.push(novo);
        }
        else {
            this.itens.push(novo);
        }
    }
    obter(chave) {
        const tem = this.itens.filter((item) => item.chave === chave);
        if (tem.length === 0) {
            return console.log('Não temos está chave');
        }
        else {
            return console.log(tem);
        }
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = new Array();
    }
}
const mapa1 = new Mapa();
mapa1.colocar({ chave: 1, valor: 'Pedro' });
mapa1.colocar({ chave: 2, valor: 'Rebeca' });
mapa1.colocar({ chave: 3, valor: 'Maria' });
mapa1.colocar({ chave: 1, valor: 'Gustavo' });
mapa1.colocar({ chave: 2, valor: 'Martins' });
mapa1.imprimir();
mapa1.obter(5);
mapa1.limpar();
mapa1.imprimir();
//# sourceMappingURL=generics.js.map