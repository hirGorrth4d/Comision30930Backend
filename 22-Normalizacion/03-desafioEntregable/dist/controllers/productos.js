"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.deleteProduct = exports.createProduct = exports.checkBodyProduct = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//importar las funciones desde api archivo
var checkBodyProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, description, stock, price;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description, stock = _req$body.stock, price = _req$body.price;

            if (!(!name || !description || !stock || !price)) {
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

  return function checkBodyProduct(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkBodyProduct = checkBodyProduct;

var getAllProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var productos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              productos = 'Todos los productos';
              res.json({
                data: productos
              });
            } catch (err) {
              res.status(500).json({
                error: err.message,
                stack: err.stack
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllProducts(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, producto;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            producto = 'Producto con id' + id;

            if (producto) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              msgs: 'Product not found!'
            }));

          case 5:
            res.json({
              data: producto
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              error: _context3.t0.message,
              stack: _context3.t0.stack
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getProductById(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var createProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, name, description, stock, price, newProduct;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, stock = _req$body2.stock, price = _req$body2.price;
              newProduct = {
                name: name,
                description: description,
                stock: stock,
                price: price
              };
              res.json({
                data: newProduct
              });
            } catch (err) {
              res.status(500).json({
                error: err.message,
                stack: err.stack
              });
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createProduct(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body3, name, description, stock, price, producto, productUpdated;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body3 = req.body, name = _req$body3.name, description = _req$body3.description, stock = _req$body3.stock, price = _req$body3.price;
            producto = 'Producto encontrado por id ' + id;

            if (producto) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              msgs: 'Product not found!'
            }));

          case 6:
            productUpdated = 'Se hizo update del producto';
            res.json({
              msg: 'Product updated',
              data: productUpdated
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              error: _context5.t0.message,
              stack: _context5.t0.stack
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function updateProduct(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            try {
              id = req.params.id; //funcion que busque por id y borre el elemento

              res.json({
                msg: 'product deleted'
              });
            } catch (err) {
              res.status(500).json({
                error: err.message,
                stack: err.stack
              });
            }

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteProduct(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;