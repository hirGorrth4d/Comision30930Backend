// const { initMongoDB, disconnectMongo } = require('./01-conexion');
// const { EstudianteModel } = require('./02-schema');

// const updatear = async () => {
//   await initMongoDB();

//   console.log('Update documento por ID');
//   const idDocumento = '6272792400f9e7da25e8dcac';
//   const u1 = await EstudianteModel.findByIdAndUpdate(
//     idDocumento,
//     { admin: true },
//     { new: true }
//   );

//   console.log('Updated Document');
//   console.log(u1);

//   console.log('Update documento con filtros');
//   const u2 = await EstudianteModel.updateOne(
//     { admin: false },
//     { $set: { password: 'Modificada' } }
//   );

//   console.log('\n\n\n\nUpdated con filtros');
//   console.log(u2);
//   await disconnectMongo();

// };

// updatear();
