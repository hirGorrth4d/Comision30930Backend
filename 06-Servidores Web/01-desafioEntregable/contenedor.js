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

                if (productId) return productId;
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


///////////////////////////////////////////////////////////////////////////////////
//EXPORTAR PARA USARLO COMO MODULO

module.exports = {
    Contenedor: miContenedor
  };