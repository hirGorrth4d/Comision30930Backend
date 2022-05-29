"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
var apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
var colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];
var app = (0, _express["default"])();

var between = function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var devolverAleatorios = function devolverAleatorios(req, res) {
  var respuesta = [];

  for (var i = 0; i < 10; i++) {
    respuesta.push({
      nombre: nombres[between(0, nombres.length)],
      apellido: apellidos[between(0, apellidos.length)],
      color: colores[between(0, colores.length)]
    });
  }

  res.json({
    data: respuesta
  });
};

app.get('/test', devolverAleatorios);
var puerto = 8080;
app.listen(puerto, function () {
  return console.log("Escuchando puerto ".concat(puerto));
});