import { CarritoModel } from "../models/carritos";
import { ProductsModel } from "../models/productos";

export const getCarritos = async (req, res) => {
  try {
    const carritos = await CarritoModel.find()

    res.json({
      data: carritos,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const createCarrito = async(req, res) => {
  try {
     const cartCreated = await CarritoModel.create({})

    res.json({
      data: cartCreated,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getCarritoById = async (req, res) => {
  try {
    const { id } = req.params;

    const carrito = await CarritoModel.findById(id)

    if (!carrito)
      return res.status(404).json({
        msgs: 'Carrito not found!',
      });

    res.json({
      data: carrito,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const agregarProducto = async (req,res) => {

    const {idCarrito, idProducto} = req.params

    const productToAdd = await ProductsModel.findById(idProducto)
    const newCarrito = {idCarrito, productos:[...{productToAdd}]
                          }
    const carritoUpdated = await CarritoModel.findByIdAndUpdate(idCarrito,newCarrito);
    

    res.json({
      data: carritoUpdated,
    });
    
    
  /*
  

        carrito.productos.push(product); con mongo

        const carritos = await this.getData();

        const indice = carritos.findIndex((unCarrito) => unCarrito.id === id);

        carritos.splice(indice,1,carrito)

        await this.saveData(carritos);
  */
      }


export const deleteCarrito = async (req, res) => {
  try {
    const { id } = req.params;

    const carrito = {} //bd 
      if (!carrito)
        return res.status(404).json({
          msgs: 'Carrito not found!',
        });
        else [] //bd + id


    res.json({
      msg: 'Carrito deleted',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};