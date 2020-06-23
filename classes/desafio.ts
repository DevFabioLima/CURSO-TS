// EXERCICIO 01
class Moto {
  constructor(public nome: string, public velocidade: number = 0){

  }
  public buzinar(): void {
    return console.log('Tooooooooot!')
  }
  
  public acelerar(delta: number): number {
    return this.velocidade = this.velocidade + delta
  }
}

let moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// EXERCIO 02
class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0){
  }
}

class Retangulo extends Objeto2D {
  public area(): number {
    return this.base * this.altura
  }
}

let retangulo1 = new Retangulo(5,7)
console.log(retangulo1.area())

// EXERCIO 03
class Estagiario {
  private _primeiroNome= ''

  get primeiroNome(): string {
    return this._primeiroNome
  }

  set primeiroNome(valor: string){
    if (valor.length >= 3){
      this._primeiroNome = valor
    }
  }

}

const estagiario2 = new Estagiario
estagiario2.primeiroNome = "Fabio Lucas"
console.log(estagiario2)
