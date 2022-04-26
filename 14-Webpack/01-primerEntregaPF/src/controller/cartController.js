const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { ProductosController } = require('./productsController');


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

  async getAll() {
    const carritos = await this.getData();

    return carritos;
  }

  async createCart() {
    const carritos = await this.getData();

        let id;

        const newCart = {id: uuidv4(),
                         timestamp: getClockTime(),
                         productos:[]
        }
        carritos.push(newCart);

        await this.saveData(carritos);
        return newCart
    }

    async saveProduct(id,idProd){

        const carrito = await this.getById(id);
        const product = await ProductosController.getById(idProd)

        carrito.productos.push(product);

        const carritos = await this.getData();

        const indice = carritos.findIndex((unCarrito) => unCarrito.id === id);

        carritos.splice(indice,1,carrito)

        await this.saveData(carritos);
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

  async deleteById(number) {
    const carritos = await this.getData();

    const nuevoArray = carritos.filter(
      (unCarrito) => unCarrito.id != number
    );

    await this.saveData(nuevoArray);
  }


  async deleteProductById(idCarrito,idProd) {
    const carrito = await this.getById(idCarrito);
    const product = idProd

    const nuevoArray = carrito.productos.filter(
      (unProducto) => unProducto.id != product
    );

    await this.saveData(nuevoArray);
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