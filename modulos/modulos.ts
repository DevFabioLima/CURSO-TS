import { areaCircunferencia } from './circunferencia';
import { areaRetangulo } from './retangulo';

console.log(areaCircunferencia(2));
console.log(areaRetangulo(10,2));

// Tipo mais antigo do módulo
const {digaOi} = require('./novo');
console.log(digaOi('Fabio'));