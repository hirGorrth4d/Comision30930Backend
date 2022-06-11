"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4; //Esto solo va a funcionar si el archivo ya existe


var Productos = /*#__PURE__*/function () {
  function Productos(nombreArchivo) {
    _classCallCheck(this, Productos);

    this.archivo = nombreArchivo;
  }

  _createClass(Productos, [{
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
        var productos;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getData();

              case 2:
                productos = _context3.sent;
                return _context3.abrupt("return", productos);

              case 4:
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
    }() //GET BY ID

  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(number) {
        var productos, indice;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getData();

              case 2:
                productos = _context4.sent;
                indice = productos.findIndex(function (unProducto) {
                  if (unProducto.id === number) return true;else return false;
                });

                if (!(indice === -1)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", null);

              case 6:
                return _context4.abrupt("return", productos[indice]);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getById(_x2) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }() //POST

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(miObjeto) {
        var productos, id, productoNuevo;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getData();

              case 2:
                productos = _context5.sent;
                productoNuevo = {
                  id: uuidv4(),
                  nombre: miObjeto.nombre,
                  precio: miObjeto.precio,
                  thumbnail: miObjeto.thumbnail
                };
                productos.push(productoNuevo);
                _context5.next = 7;
                return this.saveData(productos);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function post(_x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }() //DELETE

  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(number) {
        var productos, nuevoArray;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getData();

              case 2:
                productos = _context6.sent;
                nuevoArray = productos.filter(function (unProducto) {
                  return unProducto.id != number;
                });
                _context6.next = 6;
                return this.saveData(nuevoArray);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }() //UPDATE

  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, nuevaData) {
        var productos, indice, productUpdated;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.get();

              case 2:
                productos = _context7.sent;
                indice = productos.findIndex(function (unProducto) {
                  return unProducto.id === id;
                });

                if (!(indice < 0)) {
                  _context7.next = 6;
                  break;
                }

                throw new Error('no existe el producto');

              case 6:
                productUpdated = _objectSpread({
                  id: id
                }, nuevaData);
                productos.splice(indice, 1, productUpdated);
                _context7.next = 10;
                return this.saveData(productos);

              case 10:
                return _context7.abrupt("return", productUpdated);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function update(_x5, _x6) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return Productos;
}();

var ProductosController = new Productos('productos.json');
module.exports = {
  ProductosController: ProductosController
};