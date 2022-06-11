"use strict";

var _faker = require("@faker-js/faker");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

_faker.faker.locale = 'es';
var fakerDB = [];

for (var i = 0; i < 5; i++) {
  fakerDB.push({
    thumbnail: _faker.faker.image.imageUrl(),
    id: _faker.faker.database.mongodbObjectId(),
    nombre: _faker.faker.commerce.product(),
    precio: _faker.faker.commerce.price(100, 4500, 0)
  });
}

var Productos = /*#__PURE__*/function () {
  function Productos(nombreArray) {
    _classCallCheck(this, Productos);

    this.arrayContenedor = nombreArray;
  } //GET


  _createClass(Productos, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var productos;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.arrayContenedor;

              case 2:
                productos = _context.sent;
                return _context.abrupt("return", productos);

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
    }()
  }]);

  return Productos;
}();

var ProductosController = new Productos(fakerDB);
module.exports = {
  ProductosController: ProductosController
};