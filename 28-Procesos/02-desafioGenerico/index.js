const argumentos = process.argv.slice(2)

console.log('ARGUMENTOS RECIBIDOS');

const datos = {
    numeros: argumentos
  };
  
  console.log(datos);



process.on('exit', (code) => {
    console.log(`Exit ==> El proceso termino con codigo ${code}\n\n`);
  });
  
  if (!argumentos.length){
    process.exit(-4)
} 
