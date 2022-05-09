const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { EstudianteModel } = require('./02-schema');

const consultar = async () => {
  await initMongoDB();

  const q1 = await EstudianteModel.find();

  console.log('\n\n\nUsuarios con find');
  console.log(q1);

  const q2 = await EstudianteModel.find({ edad: { $gt: 33 } });
  console.log('\n\n\nUsuarios con find filtro edad mayor a 33');
  console.log(q2);

  const c1 = { edad: { $gt: 35 } };
  const c2 = { nombre: "Aldana" };

  const q3 = await EstudianteModel.find({
    $and: [c1, c2],
  });

  console.log(
    '\n\n\nUsuarios con find filtro edad mayor a 35 y que no sean admins'
  );
  console.log(q3);


  const q5 = await EstudianteModel.find({ nombre: "Ezequiel" })
    .sort({ edad: 1 })
    .limit(2);
  console.log('\n\n\nUsuarios con find + sort + limit');
  console.log(q5);

  const q6 = await EstudianteModel.find({ admin: true }, { nombre: 1, email: 1 })
    .sort({ edad: 1 })
    .limit(2);
  console.log('\n\n\nUsuarios con find + proyeccion + sort + limit');
  console.log(q6);

  await disconnectMongo();
};

consultar();
