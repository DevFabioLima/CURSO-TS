// LET e CONST
let seraQuePode = '?'
console.log(seraQuePode)
let estaFrio = true
if(estaFrio){
  let acao = 'Colocar casaco'
  var temp = 33
  console.log(acao)
}
// Com var isto é possivel
// console.log(temp)
// Com let não é possivel pois tenho escopo de bloco

const cpf: string = '123455'
// cpf = '98765' -> não possivel no es6
console.log(cpf)
// Const também tem escopo de bloco

// Arrow function

// normal function
const somar = function(n1: number, n2: number): number {
  return n1 + n2
}
// arrow function
const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(10,5))

// sem params
const saudacao = () => console.log('Ola !')

// 1 parms
const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('Lucas')

// THIS
/* function normalComThis(){
  console.log(this)
}
normalComThis()

const normalComThisEspecial = normalComThis.bind(2)
normalComThisEspecial()

// THIS com arrow 
console.log(this) // sempre será este valor o this
const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis.bind(2)
arrowComThisEspecial() */

// Parâmetro padrão 
function contagemRegressiva(inicio: number = 3, 
  fim: number = inicio - 5): void {
  console.log(inicio)
  while(inicio > fim){
    inicio--
    console.log(inicio)
  }
  console.log('FIM !!')
}
contagemRegressiva()
contagemRegressiva(5)

// Rest e Spread
const numbers = [1,10,99,-5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Fabio','Lucas','Martins']
const turmaB: string[] = ['Nathalia','Rafaela','Romeu',...turmaA]
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
  return args
}

const numeros = retornarArray(1,2,3,4,5,620,781)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest e Spread (Tupla)
const tupla: [number, string, boolean] = [1,'abc',false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string,  boolean]){
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (object)
const item = {
  nome: 'SSD 480GB',
  preco: 200,
  caracteristicas: {
    w: 'importado'
  }
}
// n é o apelido para nome
const {nome: n, preco, caracteristicas: { w }} = item
console.log(n)
console.log(preco)
console.log(w)

//EXERCICIOS MÒDULO 04
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

const dizerOla = (nome: string = 'Pessoa'): void => console.log(`Ola ${nome}`)
dizerOla()
dizerOla('Fabio')

const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

const array = [55,20]
array.push(...nums)
console.log(array)

const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1)
console.log(nota2)
console.log(nota3)

const cientista = {
  primeiroNome: 'Will',
  experiencia: 12
}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome)
console.log(experiencia)

// Callback
function esperar3s(callback: (dado: string) => void){
  setTimeout(() => {
    callback('3s depois...')
  }, 3000)
}
esperar3s(function(resultdo: string){
  console.log(resultdo)
})

// Convertendo callback em promisse
function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3s depois promise...')
    }, 3000)
  })
}
esperar3sPromise().then(dado => console.log(dado))

// CHAMADA API COM PROMISE
fetch('https://swapi.dev/api/people/1/')
      .then(res => res.json())
      .then(personagem => personagem.films)
      .then(films => fetch(films[0]))
      .then(resFilm => resFilm.json())
      .then(filme => console.log(filme.title))
      .catch(err => console.log(err))