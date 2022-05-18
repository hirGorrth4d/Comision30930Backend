"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMsg = exports.getAllMsg = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//importar las funciones desde api memoria
var getAllMsg = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var msgs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              msgs = 'Todos los mensajes';
              res.json({
                data: msgs
              });
            } catch (err) {
              res.status(500).json({
                error: err.message,
                stack: err.stack
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllMsg(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllMsg = getAllMsg;

var sendMsg = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, msg, newMsg;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, msg = _req$body.msg;

            if (!(!name || !msg)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Invalid Body'
            }));

          case 4:
            newMsg = {
              nombre: name,
              mensaje: msg
            };
            res.json({
              data: newMsg
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              error: _context2.t0.message,
              stack: _context2.t0.stack
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function sendMsg(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendMsg = sendMsg;