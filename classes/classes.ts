class Data {
  // Publico por padrão
     public dia: number
     mes: number
     ano: number

     constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
       this.dia = dia
       this.mes = mes
       this.ano = ano
     }
}

const aniversario = new Data (1, 6, 1999)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // Posso omitir os "()"
console.log(casamento)

// Mesmo exemplo simplificado
class DataEsperta {
     constructor(
      public dia: number = 1, 
      public mes: number = 1, 
      public ano: number = 1970) {
       
     }
}

const aniversarioEsperto = new DataEsperta (1, 6, 1999)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // Posso omitir os "()"
console.log(casamentoEsperto)

// DESAFIO
// Atributos: nome, preco e desconto
// Criar o constructor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params

class Produto {
    constructor(public nome: string, public preco: number, 
              public desconto: number = 0){
    }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
  }

}
const pão = new Produto('Pão', 0.50)
console.log(pão)
 
const arroz = new Produto('Arroz',10.50, 0.50)
console.log(arroz)
console.log(arroz.resumo())

// MODIFICADORES DE ACESSO
class Carro {
  private velocidadeAtual: number = 0

  constructor(public marca: string, public modelo: string,
    private velocidadeMaxima: number = 200){

    }
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0
    && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValida){
      this.velocidadeAtual = novaVelocidade
    }else{
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }

}

const carro1 = new Carro('Ford', 'Ka', 190)

// Chamar o método 50x
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(36).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())


// HERANÇA
class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number){
    super('Ferrari', modelo, velocidadeMaxima)
  }
  // Sobre escrevendo métodos de carro
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }

}

const f40 = new Ferrari('F40', 320)
console.log(`MARCA: ${f40.marca}, MODELO: ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// GETTER & SETTERS
class Pessoa {
  private _idade: number = 0

  get idade(): number{
    return this._idade
  }

  set idade(valor: number){
    if(valor >= 0 && valor <= 120){
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
// Não é preciso colocar o método set acesamos como att
pessoa1.idade = 10
console.log(pessoa1)

pessoa1.idade = -7
console.log(pessoa1)

// Atributos e métodos estáticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(4))


// CLASSE ABSTRACT 
abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t +a)
  }
}

class Multiplicar extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

const somando: Calculo = new Soma()
somando.executar(10,10,10,10,10)
console.log(somando.getResultado())

const multiplicando: Calculo = new Multiplicar()
multiplicando.executar(10,10,10,10,10)
console.log(multiplicando.getResultado())

// CONTRCUTOR PRIVADO SINGLETON
class Unico {
  private static instance: Unico = new Unico
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance
  }

  agora() {
    return new Date
  }
}

//const errado = new Unico

//Certo
const data = Unico.getInstance().agora()
console.log(data)

//Somente Leitura
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string){
    this.modelo = modelo
  }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'

console.log(turboHelice)

