"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBService = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../../knexfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DB = /*#__PURE__*/function () {
  function DB() {
    _classCallCheck(this, DB);

    var environment = process.env.NODE_ENV || 'production';
    console.log("SETTING ".concat(environment, " DB"));
    var options = _knexfile["default"][environment];
    this.connection = (0, _knex["default"])(options);
  }

  _createClass(DB, [{
    key: "init",
    value: function init() {
      var _this = this;

      ///////////////MENSAJES////////////////
      this.connection.schema.hasTable('mensajes').then(function (exists) {
        if (exists) return;
        console.log('Creamos la tabla mensajes!');
        return _this.connection.schema.createTable('mensajes', /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mensajesTable) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    mensajesTable.increments();
                    mensajesTable.string('nombre').notNullable();
                    mensajesTable.string('mensaje').notNullable();
                    mensajesTable.timestamps(true, true);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }); ///////////////////PRODUCTOS/////////////////////////

      this.connection.schema.hasTable('productos').then(function (exists) {
        if (exists) return;
        console.log('Creamos la tabla productos!');
        return _this.connection.schema.createTable('productos', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(productosTable) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    productosTable.increments();
                    productosTable.string('nombre').notNullable();
                    productosTable.integer('precio');
                    productosTable.string('thumbnail').notNullable();
                    productosTable.timestamps(true, true);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    } ////////////////////////////////MÉTODOS/////////////////////

  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tableName, id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!id) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this.connection("".concat(tableName)).where('id', id));

              case 2:
                return _context3.abrupt("return", this.connection("".concat(tableName)).select('*'));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x3, _x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tableName, data) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection("".concat(tableName)).insert(data).then(function () {
                  return console.log('Data inserted!');
                })["catch"](function (err) {
                  console.log('There was an error inserting table productos');
                  console.log(err);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function post(_x5, _x6) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(tableName, id, data) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection("".concat(tableName)).where('id', id).update(data);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function update(_x7, _x8, _x9) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function _delete(tableName, id) {
      this.connection("".concat(tableName)).del().where('id', id).then(function () {
        console.log("Element deleted");
      });
    }
  }]);

  return DB;
}();

var DBService = new DB();
exports.DBService = DBService;