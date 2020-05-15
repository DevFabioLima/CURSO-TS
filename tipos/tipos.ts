// string
let nome = 'Lucas'
console.log(nome);
// nome = 28

// numbers
let idade = 20
idade = 20.10
// idade = 'Fabio'
console.log(idade)

// boolean
let possuiHobbies = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number = 10
minhaIdade = 20
console.log(minhaIdade)
console.log(typeof minhaIdade)
// minhaIdade = '28'

// array 
let hobbies: any[] = ["Cozinhar","Jogar Bola"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [10,20,30]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ["Av Xavante", 99, "Rua 10"]
console.log(endereco)

// Enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja, 
  Amarelo,
  Vermelho = 100
}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// Any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BWM', ano: 2019}
console.log(carro)

// Funções
function retornaMeuNome(): string {
  // return minhaIdade
  return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
  console.log("oi")
}
digaOi()

function multiplicar (numA: number, numB: number): number {
  return numA * numB
}
console.log(multiplicar(2,2))

// Tipo função 
let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(5,10))

// Objetos
let usuarios: {nome: string, idade: number}
// usuarios = {}
// usuario = {
    // name: 'Jose',
    // age: 22
// }
usuarios = {
  nome: 'Fabio',
  idade: 20
}
console.log(usuarios)




// OUTRA SOLUÇÃO MENOS CODIGO
let funcionario2: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ["Jose","Martins"],
  baterPonto(horario: number): string {
    if(horario <= 8){
      return 'Ponto normal'
    }else {
      return 'Fora do ponto'
    }
  }
}
console.log(funcionario2.baterPonto(10))

// CRIANDO UM TIPO FUNCIONARIO PARA REUTILIZAR 
type Funionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionario10: Funionario = {
  supervisores: ["Fabio", "Lima"],
  baterPonto(horario: number): string {
    if(horario <= 8){
      return "Horario normal"
    }else{
      return "Fora do horario"
    }
  }
}
console.log(funcionario10.baterPonto(7))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)


// Never mocando erros
function falha(msg: string): never {
  throw new Error(msg)
}
const produto = {
  nome: 'Sabão',
  preco: -1,
  validarProduto(){
    if(!this.nome || this.nome.trim().length === 0 ){
      falha('Precisa ter um nome')
    }
    if(this.preco <= 0){
      falha('Preço inválido!')
    }
  }
}
produto.validarProduto()