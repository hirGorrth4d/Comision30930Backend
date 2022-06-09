//import { MensajesController } from "../api/apiMemoria";
//import { DBService } from "../api/apiSQL";
import { MensajesController } from "../api/apiArchivoMensajes";


export const checkBodyMsg = async (req, res, next) => {
  const {nombre, mensaje} = req.body;

  if (!nombre || !mensaje)
    return res.status(400).json({
      msg: 'missing Body fields',
    });
  next();
};

export const getAllMsg = async (req, res) => {
  try {
    const msgs = await MensajesController.get()
    res.json({
      msgs
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};


export const sendMsg = async (req, res) => {
  try {
    const { id, nombre, apellido, edad, alias, avatar, mensaje } = req.body;
    const mensajeNuevo = { id, nombre, apellido, edad, alias, avatar, mensaje }

    if (!nombre || !mensaje)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    await MensajesController.post(mensajeNuevo)
    res.json({
      data: mensajeNuevo,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
