"use strict";

var _normalizr = require("normalizr");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var author = new _normalizr.schema.Entity('author', {}, {
  idAttribute: 'email'
});
var msge = new _normalizr.schema.Entity('message', {
  author: author
}, {
  idAttribute: '_id'
});
var msgesSchema = new _normalizr.schema.Array(msge); //Esto solo va a funcionar si el archivo ya existe

var Mensajes = /*#__PURE__*/function () {
  function Mensajes(nombreArchivo) {
    _classCallCheck(this, Mensajes);

    this.archivo = nombreArchivo;
  }

  _createClass(Mensajes, [{
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fs.promises.readFile(this.archivo, 'utf-8');

              case 2:
                data = _context.sent;
                return _context.abrupt("return", JSON.parse(data));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "saveData",
    value: function () {
      var _saveData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function saveData(_x) {
        return _saveData.apply(this, arguments);
      }

      return saveData;
    }() //GET

  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data, normalizedMessages;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getData();

              case 2:
                data = _context3.sent;
                normalizedMessages = (0, _normalizr.normalize)(data, msgesSchema);
                return _context3.abrupt("return", normalizedMessages);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }() //POST

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(miObjeto) {
        var data, mensajeNuevo;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getData();

              case 2:
                data = _context4.sent;
                mensajeNuevo = {
                  _id: uuidv4(),
                  author: {
                    email: miObjeto.email,
                    nombre: miObjeto.nombre,
                    apellido: miObjeto.apellido,
                    edad: miObjeto.edad,
                    alias: miObjeto.alias,
                    avatar: miObjeto.avatar
                  },
                  text: miObjeto.mensaje
                };
                data.push(mensajeNuevo);
                _context4.next = 7;
                return this.saveData(data);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function post(_x2) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return Mensajes;
}();

var MensajesController = new Mensajes('mensajes.json');
module.exports = {
  MensajesController: MensajesController
};