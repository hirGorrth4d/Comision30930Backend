//importar las funciones desde api memoria

export const getAllMsg = async (req, res) => {
  try {
    const msgs = 'Todos los mensajes'
    res.json({
      data: msgs,
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
    const { name, msg } = req.body;

    if (!name || !msg)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const newMsg = {name: name, msg: msg}
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
