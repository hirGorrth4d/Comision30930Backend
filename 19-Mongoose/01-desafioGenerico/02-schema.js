const mongoose = require('mongoose');

const estudiantesCollection = 'estudiantes';

const EstudiantesSchema = new mongoose.Schema(
  {
    nombre: { type: String, require: true, max: 100 },
    apellido: { type: String, require: true, max: 100 },
    edad: { type: Number, require: true },
    dni: { type: Number, default: false, unique: true,max: 8 },
    curso: { type: String, require: true, max: 100 },
    nota: { type: Number, required: true },
  }
);

const EstudianteModel = mongoose.model(estudiantesCollection, EstudiantesSchema);

module.exports = { EstudianteModel };
