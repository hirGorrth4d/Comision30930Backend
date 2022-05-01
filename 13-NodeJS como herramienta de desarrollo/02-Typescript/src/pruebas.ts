//  console.log("Hola")
//  let var1 : number = 4
//  var1 = 
//  var1 = "people
//  const sumar = (a : number, b : number) => a + 
//  console.log(sumar(6,8))
//  console.log(sumar(6, {msg:"hola"}));

//ARRIBA EJEMPLO DE ERRORES

let var1 : string = "hola";

let var2 : boolean = true;

let var3 : number[] = [1,2,3,4];

interface IUsuario {
    nombre : string,
    edad : number
}

const var4 : IUsuario = {
 nombre: 'Noelia',
 edad: 29
}

var3.forEach(x => x**2)

const sumar = (a: number, b: number) => a = b
console.log(sumar(6,8));
