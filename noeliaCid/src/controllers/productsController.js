import ProductsAPI from '../apis/productsAPI'


class ProductsController {
  hasIdParam(req, res, next) {
    req.params.id ? next() : res.status(404).json({ msg: 'missing id' })
  }

  isValid(req, res, next) {
    const { name, code, price, stock } = req.body
    if (
      !name ||
      typeof name !== 'string' ||
      !code ||
      typeof code !== 'string' ||
      !price ||
      typeof price !== 'number' ||
      !stock ||
      typeof stock !== 'number'
    ) {
      return res.status(400).json({
        msg: 'Falta ingresar alguno de los campos obligatorios o está en un formato incorrecto: Name, Code, Price y Stock'
      })
    }
    next()
  }

  async getProducts(req, res) {
    const id = req.params.id
    if (id) {
      try {
        const response = await ProductsAPI.getProductById(id)
        return res.status(200).json(response)
      } catch (error) {
        return res.status(404).json({ msg: error.message })
      }
    }
    const response = await ProductsAPI.getProducts()
    return res.status(200).json(response)
  }

  async postProduct(req, res) {
    try {
      const newItem = await ProductsAPI.postProduct(req.body)
      return res.json({ msg: 'Adding product: ', data: newItem })
    } catch (error) {
      return res.status(400).json({ msg: error.message })
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedItem = await ProductsAPI.updateProduct(req.params.id, req.body)
      res.json({ msg: 'Updating Product', data: updatedItem })
    } catch (error) {
      return res.status(400).json({ msg: error.message })
    }
  }

  async deleteProduct(req, res) {
    try {
      await ProductsAPI.deleteProduct(req.params.id)
      return res.status(200).json({
        msg: 'product deleted successfully'
      })
    } catch (error) {
      return res.status(400).json({ msg: error.message })
    }
  }
}

const productsController = new ProductsController()
export default productsController
