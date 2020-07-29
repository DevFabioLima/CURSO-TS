
function logarClasse(construtor: Function){
  console.log(construtor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean){
  return valor ? logarClasse : decoratorVazio
}

function decorator(a: string, b: number){
  return function(_: Function): void {
    console.log(a + ' ' + b)
  }
}

function decoratorObj(obj: {a: string, b: number}){
  return function(_: Function): void {
    console.log(obj.a + ' ' + obj.b)
  }
}



type Construtor = { new(...args: any[]): {} } 

function logarObjeto(construtor: Construtor){
  console.log('Carregado...')
  return  class extends construtor {
    constructor(...args: any[]){
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}

//new Eltrodomestico()
//new Eltrodomestico()


interface Eletrodomestico {
  imprimir?(): void
}

// @logarClasse
//@logarClasseSe(true)
//@decorator('Teste', 123)
//@decoratorObj({a: 'Teste obj', b: 1234})
//@logarObjeto
@imprimivel
class Eletrodomestico {
  constructor(){
    console.log('novo..')
  }
}

function imprimivel(construtor: Function){
  construtor.prototype.imprimir = function(){
    console.log(this)
  }
}

const eletro = new Eletrodomestico()

//Se houver a function chama se ñ houver ñ chama
eletro.imprimir && eletro.imprimir()


///DESAFIO
const usuarioLogado = {
  nome: 'Fabio Lima',
  email: 'fabio.lima@gmail.com',
  admin: false
}

//@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado !!')
  }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]){
      super(...args)
      if(!usuarioLogado || !usuarioLogado.admin){
        throw new Error('Sem permissão !!')
      }
    }
  }
}

//decorator método

class ContaCorrente {
  @naoNegativo
  private saldo: number

  constructor(saldo: number){
    this.saldo = saldo
  }

  @congelar
  sacar(@paramInfo valor: number){
    //if(valor <= this.saldo) {
      this.saldo -= valor
      return true
   // } else {
    //  return false
    //}
  }

  @congelar
  getSaldo() {
    return this.saldo
  }

}

const cc = new ContaCorrente(10248.50)
cc.sacar(5000)
console.log(cc.getSaldo())

//Tento mudar getSaldo
//cc.getSaldo = function() {
//  return this['saldo'] + 7000
//}
console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomePropriedade: string, 
  descritor: PropertyDescriptor){
  console.log(alvo)
  console.log(nomePropriedade)
  descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string){
  delete alvo[nomePropriedade]
  Object.defineProperty(alvo, nomePropriedade, {
    get: function(): any {
      return alvo["_" + nomePropriedade]
    },
    set: function(valor: any): void {
      if(valor < 0){
        throw new Error('Saldo inválido')
      } else {
          alvo["_" + nomePropriedade] = valor
      }
    }
  })
}

//Decorator de atributo
function paramInfo(alvo: any, nomeMetodo: any,
  indiceParam: number) {
  console.log(`Alvo: ${alvo}`)
  console.log(`Método: ${nomeMetodo}`)
  console.log(`Indice Param: ${indiceParam}`)
  }
