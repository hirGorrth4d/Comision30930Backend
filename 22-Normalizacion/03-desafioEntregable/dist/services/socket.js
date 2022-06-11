"use strict";

var _apiFaker = require("../api/apiFaker");

var _apiArchivoMensajes = require("../api/apiArchivoMensajes");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var socketIo = require('socket.io'); //import { DBService } from '../api/apiSQL'


var io;

var initWsServer = function initWsServer(server) {
  io = socketIo(server);
  io.on('connection', function (socket) {
    console.log('Nueva Conexion establecida!');
    console.log(new Date());
    socket.on('allProducts', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var productos;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _apiFaker.ProductosController.get();

            case 2:
              productos = _context.sent;
              productos.forEach(function (unProducto) {
                socket.emit('producto', unProducto);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    socket.on('allMsgs', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var mensajes;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _apiArchivoMensajes.MensajesController.get();

            case 2:
              mensajes = _context2.sent;
              mensajes.forEach(function (mensaje) {
                socket.emit('mensaje', mensaje);
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  return io;
};

var socketEmit = function socketEmit(eventName, message) {
  io.emit(eventName, message);
};

module.exports = {
  initWsServer: initWsServer,
  socketEmit: socketEmit
};