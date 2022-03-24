/*
     Manejo de archivos

>> Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo.
---------------------------------------------------------------------------------------------------------------------------
>> Aspectos a incluir en el entregable: 
El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 

FORMATO DE LOS PRODUCTOS:                                                                                                                                          
    {                                                                                                                                                    
      title: 'Escuadra',                                                                                                                                 
      price: 12.345,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
      id: 1                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Calculadora',                                                                                                                              
      price: 234.56,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
      id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Globo Terráqueo',                                                                                                                          
      price: 345.67,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
      id: 3                                                                                                                                              
    }                                                                                                                                                    
  ]    

*/
const fs = require('fs');

const filePath = './productos.txt'
const Productos = []

class Contenedor {

    constructor(title,price,thumbnail){
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail    
    }

//METODO SAVE
    save(product) {   
        //SI NO HAY PRODUCTOS LE ASIGNAMOS EL ID 1, SI NO LE ASIGNAMOS 1 MAS QUE EL ÚLTIMO DEL ARRAY
            if (Productos == []) {
               product.id = 1
            }
            else{
                product.id = Productos.length + 1
            }
        //LO AGREGAMOS AL ARRAY
        Productos.push(product)

        //LO AGREGAMOS AL ARCHIVO
        // fs.writeFileSync(filePath, Productos) 
        
        //RETORNAMOS EL ID DEL PRODUCTO AGREGADO
        return product.id
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MÉTODO GET BY ID
    getById (idNumber) {
        try {
            const data = Productos     /*JSON.parse(fs.readFileSync(filePath, 'utf-8'));*/
            const productId = data.find((element) => element.id == idNumber);

                if (productId){

                    console.log("ID A BUSCAR: ", idNumber, "PRODUCTO ENCONTRADO: ", productId);
                }
                else{
                    return null
                }
          
        } catch (err) {
            console.log('Error lectura Sincronica');
            console.log(err.message)
          }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO GET ALL
    getAll() {
        const data = Productos
        return data

        /* const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            console.log(data)
        
        */
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO DELETE BY ID
    deleteById(idNumber) {

        const data = Productos     /*JSON.parse(fs.readFileSync(filePath, 'utf-8'));*/

        const productoBorrado = data.findIndex( element => element.id == idNumber);

        Productos.splice(productoBorrado,1)
        
    }

} 

    /////////////////////////////////////////////////////////////////////

const miContenedor = new Contenedor();

const obj1 = {                                                                                                                                                    
    title: 'Escuadra',                                                                                                                                 
    price: 12.345,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
  }

const nuevoProducto = miContenedor.save(obj1)
console.log(nuevoProducto);

const buscarProd = miContenedor.getById(1)
console.log(buscarProd);

const todosLosProductos = miContenedor.getAll()
console.log(todosLosProductos);

const eliminar = miContenedor.deleteById(1)
console.log(eliminar);

const arrayConElemBorrado = miContenedor.getAll()
console.log(arrayConElemBorrado);


