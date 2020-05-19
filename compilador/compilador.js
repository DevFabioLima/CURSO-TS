"use strict";
let canal = 'Gaveta';
let inscritos = 101020;
// canal = inscritos
console.log(`Canal = ${canal}`);
// Error var já declarada em tipos
// let nome = 'Pedro'
function soma(a, b) {
    return a + b;
}
// N gera erro com o implict any, só em params funcão,
// Boa pratica tipar com o any
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'Jose';
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        // erro saudacao está null function deseja string
        // return saudacao
        saudacao = 'Tenha uma boa vida';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map