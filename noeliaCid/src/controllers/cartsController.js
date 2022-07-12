import CartsAPI from '../apis/cartsAPI'
import { EmailService } from '../services/email'
import Config from '../config'
import logger from '../utils/logger'

const notificacion = async( req ) => { 


  const { user, carts} = req.body
  const data = { user, carts }

  console.log('DATA', data);


  const destination = Config.GMAIL_PARA_NOTIFICACIONES;
  const subject = 'Nueva compra registrada';
  const content = data;

  try {
    const response = await EmailService.cartEmail(
      destination,
      subject,
      content
    );
    logger.warn('Email enviado', response)
  } catch (error) {
    return console.log({message: error.message })
  }
}

class CartsController {
  hasIdParam(req, res, next){
    req.params.id ? next() : res.status(404).json({ msg: 'missing id' })
  }


  async getCart(req, res) {
    try {
      const response = await CartsAPI.getCart(req.params.id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({ error: error.message })
    }
  }

  async buy(req, res) {
    try {
      const response = await CartsAPI.getCart(req.params.id)

      notificacion(req)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({ error: error.message })
    }
  }

  async createCart(id) {
    try {
      const response = await CartsAPI.createCart(id)
      return res.status(200).json(response)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateCart(req, res) {
    try {
      const response = await CartsAPI.updateCart(req.params.id, req.body)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({ error: error.message })
    }
  }

  async emptyCart(req, res) {
    try {
      const response = await CartsAPI.emptyCart(req.params.id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({ error: error.message })
    }
  }
}


const cartsController = new CartsController()
export default cartsController
