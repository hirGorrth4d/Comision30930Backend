const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//Esto solo va a funcionar si el archivo ya existe
class Carrito {
  constructor(nombreArchivo) {
    this.archivo = nombreArchivo;
  }

  async getData() {
        const data = await fs.promises.readFile(this.archivo, 'utf-8'); //data = '[]'
        return JSON.parse(data);
  }

  async saveData(data) {
        await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
  }

  async createCart() {
    const carritos = await this.getData();

        let id;
        const nuevoCarrito = []

        const newCart = {id: uuidv4(),
                         timestamp: getClockTime()
        }

        nuevoCarrito.push(newCart);

        carritos.push(nuevoCarrito);

        await this.saveData(carritos);
        return newCart
    }

    async saveProduct(id,miObjeto){
        const carrito = await this.getById(id);

        const productoNuevo = {
            id: uuidv4(),
            nombre: miObjeto.nombre,
            precio: miObjeto.precio,
            thumbnail:miObjeto.thumbnail,
        };
        const newCart = {...carrito, productos: productoNuevo}

        this.saveData(newCart)
    }

  async getById(number) {
    const carritos = await this.getData();

    const indice = carritos.findIndex((unCarrito) => {
      if (unCarrito.id === number) return true;
      else return false;
    });

    if (indice === -1) return null;

    return carritos[indice];
  }

  async getAll() {
    const carritos = await this.getData();

    return carritos;
  }

  async deleteById(number) {
    const carritos = await this.getData();

    const nuevoArray = carritos.filter(
      (unCarrito) => unCarrito.id != number
    );

    await this.saveData(nuevoArray);
  }

  async deleteAll() {
    const nuevo = [];

    await this.saveData(nuevo);
  }

  async Update(id, nuevaData) {
    const productos = await this.getAll();

    const indice = productos.findIndex((unProducto) => unProducto.id === id);

    if (indice < 0) throw new Error('no existe el producto');

    const productUpdated = {
      id,
      ...nuevaData,
    };

    productos.splice(indice, 1, productUpdated);

    await this.saveData(productos)

    return productUpdated
  }
}


    ////////////////////////timestamp

    function getClockTime(){
        let now    = new Date();
        let hour   = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        let day = now.getDate();
        let month = now.getMonth()+1;
        let year = now.getFullYear();
        let ap = "AM";
      
        if (hour   > 11) { ap = "PM";             }
        if (hour   > 12) { hour = hour - 12;      }
        if (hour   == 0) { hour = 12;             }
        if (hour   < 10) { hour   = "0" + hour;   }
        if (minute < 10) { minute = "0" + minute; }
        if (second < 10) { second = "0" + second; }
      
        var DateAndHour = `${day}/${month}/${year}-${hour}:${minute}:${second}-${ap}`;
        return DateAndHour;
      }
    

const CartController = new Carrito('carrito.json');

module.exports = {
  CartController: CartController,
};