let canal: string = 'Gaveta'
let inscritos: number = 101020

// canal = inscritos
console.log(`Canal = ${canal}`)

// Error var já declarada em tipos
// let nome = 'Pedro'

function soma(a: any, b: any,){
  return a + b;
}

// N gera erro com o implict any, só em params funcão,
// Boa pratica tipar com o any
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'Jose'

function saudar(isManha: boolean): string {
  let saudacao: string
  if(isManha){
    saudacao = 'Bom dia'
  }else {
    // erro saudacao está null function deseja string
    // return saudacao
    saudacao = 'Tenha uma boa vida'
  }
  return saudacao
}