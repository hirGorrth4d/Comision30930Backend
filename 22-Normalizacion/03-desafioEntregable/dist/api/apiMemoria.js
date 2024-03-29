"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require('uuid'),
    uuidv4 = _require.v4;

var fyh = Date.now();
var timestamp = new Date(fyh);
var contenedorMensajes = []; //Esto solo va a funcionar si el archivo ya existe

var Mensajes = /*#__PURE__*/function () {
  function Mensajes(nombreArray) {
    _classCallCheck(this, Mensajes);

    this.arrayContenedor = nombreArray;
  } //GET


  _createClass(Mensajes, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var mensajes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.arrayContenedor;

              case 2:
                mensajes = _context.sent;
                return _context.abrupt("return", mensajes);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }() //POST

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(miMensaje) {
        var mensajes, id, mensajeNuevo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.arrayContenedor;

              case 2:
                mensajes = _context2.sent;
                mensajeNuevo = {
                  id: uuidv4(),
                  nombre: miMensaje.nombre,
                  mensaje: miMensaje.mensaje,
                  timestamp: timestamp.toUTCString()
                };
                mensajes.push(mensajeNuevo);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function post(_x) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return Mensajes;
}();

var MensajesController = new Mensajes(contenedorMensajes);
module.exports = {
  MensajesController: MensajesController
};