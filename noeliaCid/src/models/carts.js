import mongoose from 'mongoose'
import Logger from '../utils/logger'
import users from './users'
import MongoDB from '../utils/mongoConecction'


const dbCollection = 'carts'
const productSchema = new mongoose.Schema({
  user: { type: String, required: true },
  carts: { type: Array, required: false }
})

class Carts {

  constructor() {
    MongoDB.getConnection()
    this.carts = mongoose.model(dbCollection, productSchema)
    this.carts.count().then(async (count) => {
      if (count < 1) {
        Logger.warn('creando carritos')
        await users.getUsers().then((list) => {
          list.forEach((user) => {
            this.carts.create({ user: user._id, carts: [] })
          })
        })
      }
    })
  }

  async getCart(id) {
    try {
      const response = await this.carts.find({ user: id })
      if (response.length == 0) {
        throw new Error('Cart not found')
      }
      return response
    } catch (error) {
      Logger.error(error.message)
      throw new Error(`Error getting carts: ${error.message}`)
    }
  }

  async createCart(id) {
    try {
      const response = await this.carts.create({ user: id, carts: [] })
      return response
    } catch (error) {
      Logger.error(error.message)
      throw new Error(`Error creating cart: ${error.message}`)
    }
  }

  async updateCart(id, cart) {
    try {
      const response = await this.carts.findOneAndUpdate({ user: id }, cart)
      if (!response) {
        throw new Error('Cart not found')
      }
      return response
    } catch (error) {
      Logger.error(error.message)
      throw new Error(`Error updating cart: ${error.message}`)
    }
  }

  async emptyCart(id) {
    try {
      const response = await this.carts.findOneAndUpdate({ user: id }, { carts: []})
      if (!response) {
        throw new Error('Cart not found')
      }
      return response
    } catch (error) {
      Logger.error(error.message)
      throw new Error(`Error deleting product: ${error.message}`)
    }
  }
}

const carts = new Carts()
export default carts
