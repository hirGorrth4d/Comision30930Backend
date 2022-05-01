// const lista = [2,3,5,7];
// lista.map(x => x * x).forEach( x => console.log(x));

//ARRIBA EJEMPLO DE TRANSPILACION


import Color from './color';

for (let i = 0; i < 200; i++) {
  const miColor = new Color();
  console.log(`pedido ${i}: ${JSON.stringify(miColor.color)}`);
}

