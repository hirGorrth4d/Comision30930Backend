//importar las funciones desde api archivo

export const checkBodyProduct = async (req, res, next) => {
  const { name, description, stock, price,} = req.body;

  if (!name || !description || !stock || !price)
    return res.status(400).json({
      msg: 'missing Body fields',
    });
  next();
};

export const getAllProducts = async (req, res) => {
  try {

    const productos = 'Todos los productos'

    res.json({
      data: productos,
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

    const producto = 'Producto con id' + id

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

export const createProduct = async (req, res) => {
  try {
    const { name, description, stock, price} = req.body;

    const newProduct ={name,description,stock,price}

    res.json({
      data: newProduct,
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
    const { name, description, stock, price } = req.body;

    let producto = 'Producto encontrado por id ' + id

    if (!producto)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    const productUpdated = 'Se hizo update del producto'

    res.json({
      msg: 'Product updated',
      data: productUpdated,
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

    //funcion que busque por id y borre el elemento

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
