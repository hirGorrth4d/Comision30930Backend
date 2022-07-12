import Products from '../models/products'

class ProductsAPI {
  async getProducts() {
    return await Products.getProducts()
  }

  async getProductById(id) {
    return await Products.getProductById(id)
  }

  async postProduct(product) {
    return await Products.postProduct(product)
  }

  async updateProduct(id, product) {
    return await Products.updateProduct(id, product)
  }

  async deleteProduct(id) {
    return await Products.deleteProduct(id)
  }
}

const productsAPI = new ProductsAPI()
export default productsAPI
