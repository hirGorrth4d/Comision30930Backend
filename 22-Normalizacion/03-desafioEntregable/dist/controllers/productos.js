"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.fakerProducts = exports.deleteProduct = exports.createProduct = exports.checkBodyProduct = void 0;

var _apiSQL = require("../api/apiSQL");

var _apiFaker = require("../api/apiFaker");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkBodyProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, nombre, precio, thumbnail;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, precio = _req$body.precio, thumbnail = _req$body.thumbnail;

            if (!(!nombre || !precio || !thumbnail)) {
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

var fakerProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var productos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _apiFaker.ProductosController.get();

          case 3:
            productos = _context2.sent;
            res.json({
              data: productos
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

  return function fakerProducts(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fakerProducts = fakerProducts;

var getAllProducts = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var productos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _apiFaker.ProductosController.get();

          case 3:
            productos = _context3.sent;
            res.json({
              data: productos
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              error: _context3.t0.message,
              stack: _context3.t0.stack
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getAllProducts(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var createProduct = function createProduct(req, res) {
  try {
    var _req$body2 = req.body,
        nombre = _req$body2.nombre,
        precio = _req$body2.precio,
        thumbnail = _req$body2.thumbnail;
    var newProduct = {
      nombre: nombre,
      precio: precio,
      thumbnail: thumbnail
    };

    _apiSQL.DBService.post('productos', newProduct);

    res.json({
      data: newProduct
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack
    });
  }
};

exports.createProduct = createProduct;

var getProductById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, producto;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _apiSQL.DBService.get('productos', id);

          case 4:
            producto = _context4.sent;

            if (producto) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              msgs: 'Product not found!'
            }));

          case 7:
            res.json({
              data: producto
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              error: _context4.t0.message,
              stack: _context4.t0.stack
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function getProductById(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body3, nombre, precio, thumbnail, productToUpdate, producto, productUpdated;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body3 = req.body, nombre = _req$body3.nombre, precio = _req$body3.precio, thumbnail = _req$body3.thumbnail;
            productToUpdate = {
              nombre: nombre,
              precio: precio,
              thumbnail: thumbnail
            };
            producto = _apiSQL.DBService.get('productos', id);

            if (producto) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              msgs: 'Product not found!'
            }));

          case 9:
            _context5.next = 11;
            return _apiSQL.DBService.get('productos', id);

          case 11:
            _context5.next = 13;
            return _apiSQL.DBService.update('productos', id, productToUpdate);

          case 13:
            productUpdated = _context5.sent;
            res.json({
              msg: 'Product updated',
              data: productUpdated
            });
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              error: _context5.t0.message,
              stack: _context5.t0.stack
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));

  return function updateProduct(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, producto;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _apiSQL.DBService.get('productos');

          case 4:
            producto = _context6.sent;

            if (producto) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              msgs: 'Product not found!'
            }));

          case 9:
            _context6.next = 11;
            return _apiSQL.DBService["delete"]('productos', id);

          case 11:
            res.json({
              msg: 'product deleted'
            });
            _context6.next = 17;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              error: _context6.t0.message,
              stack: _context6.t0.stack
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 14]]);
  }));

  return function deleteProduct(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;