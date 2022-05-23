import { ProductsModel } from "../models/productos";

export const checkBodyProduct = async (req, res, next) => {
  const {nombre, precio, thumbnail, descripcion, stock } = req.body;

  if (!nombre || !precio || !thumbnail || !descripcion || !stock)
    return res.status(400).json({
      msg: 'missing Body fields',
    });
  next();
};

export const getAllProducts = async (req, res) => {
  try {
    let productos =  await ProductsModel.find()

    res.json({
      data: productos
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { nombre, precio, thumbnail, descripcion, stock} = req.body;
    const newProduct = { nombre, precio, thumbnail, descripcion, stock }
     const productCreated = await ProductsModel.create(newProduct)

    res.json({
      data: productCreated,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await ProductsModel.findById(id)

    if (!producto)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    res.json({
      data: producto,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, thumbnail, descripcion, stock } = req.body;
    
    let item = await ProductsModel.findById(id);
    if (!item)
      return res.status(404).json({
        msgs: 'Product not found!',
      });
    let productoUpdated = await ProductsModel.findByIdAndUpdate(
      id,
      { nombre, precio, thumbnail, descripcion, stock },
      { new: true }
    );
  
    res.json({
      msg: 'Product updated',
      data: productoUpdated,
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await ProductsModel.findByIdAndDelete(id);
      if (!producto)
        return res.status(404).json({
          msgs: 'Product not found!',
        });

    res.json({
      msg: 'product deleted',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
