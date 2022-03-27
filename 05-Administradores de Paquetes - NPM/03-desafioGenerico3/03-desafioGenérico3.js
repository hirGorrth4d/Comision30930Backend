/*Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

Ayuda:
Utilizar los métodos diff y format de la librería moment. */
const moment = require('moment');


const miCumple = moment('24-10-2016', 'DD-MM-YYYY');
const now = moment();

console.log('Hoy es', now.format('DD-MM-YYYY ===> dddd'));
console.log('Naci el', miCumple.format('DD-MM-YYYY'));

const diferenciaDias = now.diff(miCumple, 'days');
const diferenciaAnios = now.diff(miCumple, 'years');

console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} años`);
console.log(`Desde mi nacimiento han pasado ${diferenciaDias} dias`);