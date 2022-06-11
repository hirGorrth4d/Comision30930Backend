"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMsg = exports.getAllMsg = exports.checkBodyMsg = void 0;

var _apiArchivoMensajes = require("../api/apiArchivoMensajes");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkBodyMsg = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, nombre, mensaje;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, mensaje = _req$body.mensaje;

            if (!(!nombre || !mensaje)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'missing Body fields'
            }));

          case 3:
            next();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkBodyMsg(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkBodyMsg = checkBodyMsg;

var getAllMsg = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var msgs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _apiArchivoMensajes.MensajesController.get();

          case 3:
            msgs = _context2.sent;
            res.json({
              msgs: msgs
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              error: _context2.t0.message,
              stack: _context2.t0.stack
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllMsg(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllMsg = getAllMsg;

var sendMsg = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, id, nombre, apellido, edad, alias, avatar, mensaje, mensajeNuevo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body2 = req.body, id = _req$body2.id, nombre = _req$body2.nombre, apellido = _req$body2.apellido, edad = _req$body2.edad, alias = _req$body2.alias, avatar = _req$body2.avatar, mensaje = _req$body2.mensaje;
            mensajeNuevo = {
              id: id,
              nombre: nombre,
              apellido: apellido,
              edad: edad,
              alias: alias,
              avatar: avatar,
              mensaje: mensaje
            };

            if (!(!nombre || !mensaje)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              msg: 'Invalid Body'
            }));

          case 5:
            _context3.next = 7;
            return _apiArchivoMensajes.MensajesController.post(mensajeNuevo);

          case 7:
            res.json({
              data: mensajeNuevo
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              error: _context3.t0.message,
              stack: _context3.t0.stack
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function sendMsg(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.sendMsg = sendMsg;