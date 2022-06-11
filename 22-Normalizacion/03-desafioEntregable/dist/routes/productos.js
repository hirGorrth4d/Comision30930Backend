"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productos = require("../controllers/productos");

var router = (0, _express.Router)();
router.get('/productos-test', _productos.fakerProducts);
router.get('/', _productos.getAllProducts);
router.post('/', _productos.checkBodyProduct, _productos.createProduct);
router.get('/:id', _productos.getProductById);
router.put('/:id', _productos.checkBodyProduct, _productos.updateProduct);
router["delete"]('/:id', _productos.deleteProduct);
var _default = router;
exports["default"] = _default;