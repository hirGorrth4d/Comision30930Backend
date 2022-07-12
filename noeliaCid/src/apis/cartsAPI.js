import Carts from '../models/carts'

class CartsAPI {
  async getCart(id) {
    return await Carts.getCart(id)
  }

  async createCart(id) {
    return await Carts.createCart(id)
  }

  async updateCart(id, cart) {
    return await Carts.updateCart(id, cart)
  }

  async emptyCart(id) {
    return await Carts.emptyCart(id)
  }
}

const cartsAPI = new CartsAPI()
export default cartsAPI
