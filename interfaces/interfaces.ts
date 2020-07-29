interface Humano {
  nome: string
  idade?: number
  [prop: string]: any

  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
  console.log(`Ola ${pessoa.nome}`)
}
function mudarNome(pessoa: Humano){
  pessoa.nome = 'Lucas'
}

const pessoa: Humano = {
  nome: 'Fabio',
  idade: 21, 
  saudar(sobrenome: string){
    console.log(`Meu nome é ${this.nome} e o sobrenome é ${sobrenome}`)
  }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Martins', altura: 1.90})
pessoa.saudar('Lima');

// Usando interface com Classes...
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string){
    console.log(`Meu nome é ${this.nome} e o sobrenome é ${sobrenome}`)
  }
}

const cliente1 = new Cliente()
cliente1.nome = 'Cristiano'
saudarComOla(cliente1)
cliente1.saudar('Ronaldo')
console.log(cliente1.ultimaCompra)


// Interface função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, expoente: number): number {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(expoente).fill(base).reduce((t, a) => t * a)
}
console.log(potencia(3, 10))

// HERENÇA
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

// No Java classes abastratas não precisam utilizar os métodos já no ts sim
abstract class AbstrataBD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}