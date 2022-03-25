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

class Contenedor {
    constructor(nombreArchivo) {
        this.archivo = nombreArchivo
    }

///METODOS GET Y SAVE DATA

async getData() {
    const data = await fs.promises.readFile(this.archivo, 'utf-8');
    return JSON.parse(data)
}
async saveData(data) {
    await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));

}

//METODO SAVE
    async save(product) {   
        //SI NO HAY PRODUCTOS LE ASIGNAMOS EL ID 1, SI NO LE ASIGNAMOS 1 MAS QUE EL ÚLTIMO DEL ARRAY
        const productos = await this.getData();
        let id;

        if (productos.length === 0) id = 1;
        else id = productos[productos.length - 1].id + 1

        const productoNuevo = {
            id: id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
          };

        //LO AGREGAMOS AL ARRAY
        productos.push(productoNuevo)

        //LO AGREGAMOS AL ARCHIVO
        await this.saveData(productos) 
        
        //RETORNAMOS EL ID DEL PRODUCTO AGREGADO
        return productoNuevo.id
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MÉTODO GET BY ID
    async getById (idNumber) {
        const data = await this.getData();

        const productId = data.find((element) => element.id == idNumber);

                if (productId)console.log("ID A BUSCAR: ", idNumber, "PRODUCTO ENCONTRADO: ", productId);
                else return null
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO GET ALL
    async getAll() {
        const data = await this.getData();

        return data
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO DELETE BY ID
    async deleteById(idNumber) {

        const data = await this.getData();
        

        const nuevoArray = data.filter(
            (unProducto) => unProducto.id != idNumber
          );
      
          await this.saveData(nuevoArray);
        
    }

    async deleteAll() {
        const arrayVacio = []

        await this.saveData(arrayVacio);
    }

} 

    /////////////////////////////////////////////////////////////////////


const obj1 = {                                                                                                                                                    
    title: 'Escuadra',                                                                                                                                 
    price: 12.345,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
  }
const obj2 = {                                                                                                                                                    
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
    id: 2                                                                                                                                              
  }                                                                                                                                                   
  const obj3 =  {                                                                                                                                                    
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
    id: 3                                                                                                                                              
  }

const miContenedor = new Contenedor('productos.json');

async function guardarObjeto(){
    const resultado = await miContenedor.save(obj3)
    return resultado
}

//guardarObjeto();


async function obtenerPorId(){
    const resultado = await miContenedor.getById(2)
    return resultado
}
//obtenerPorId();

async function todosLosProd(){
    const resultado = await miContenedor.getAll()
    console.log(resultado);
}

async function borrarTodo(){
    const resultado = await miContenedor.deleteAll()
    return resultado
}
//borrarTodo();