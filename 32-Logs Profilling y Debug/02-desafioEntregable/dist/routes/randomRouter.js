"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _child_process = require("child_process");

var _path = _interopRequireDefault(require("path"));

var _logger = require("../utils/logger");

var scriptPath = _path["default"].resolve(__dirname, '../utils/operacion.js');

var router = (0, _express.Router)();
router.get('/randoms', function (req, res) {
  try {
    _logger.logger.info('RUTA: /api/randoms || METODO: get');

    var cant = req.query.cant || 100000000;
    var computo = (0, _child_process.fork)(scriptPath);
    computo.send(cant);
    computo.on('message', function (resultado) {
      res.json({
        result: resultado
      });
    });
  } catch (error) {
    _logger.logger.error('RUTA: /api/randoms || METODO: get');
  }
});
module.exports = router;