import { MensajesController } from "../api/apiMemoria";

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
    const { nombre, mensaje } = req.body;

    if (!nombre || !mensaje)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const newMsg = {nombre:nombre,mensaje:mensaje}
    await MensajesController.post(newMsg)
    res.json({
      data: newMsg,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
