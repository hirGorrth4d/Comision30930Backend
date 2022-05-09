const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { EstudianteModel } = require('./02-schema');

/**
 * Crear un Documento
 */
 const crearEstudiante = async (newUsuario) => {
	console.log(`Vamos a crear a ${newUsuario.nombre}`)
	await EstudianteModel.create(newUsuario)
	console.log("DONE\n\n");
}



const main = async () => {
	await initMongoDB();

	/**Creamos 1 usuario */
	const newUsuario = {
		nombre: 'Juan', 
		apellido: 'Perez',
		edad: 28,
		dni: 35874968,
		curso: 'Cs.Naturales',
		nota: '10'		
	}
	await crearEstudiante(newUsuario);

	/**Creamos varios usuarios */

	const estudiantes = [
		{
			nombre: 'Carlos', 
		apellido: 'Sanchez',
		edad: 40,
		dni: 40574968,
		curso: 'Cs.sociales',
		nota: '6'	
		},
		{
			nombre: 'Aldana', 
		apellido: 'Torres',
		edad: 25,
		dni: 36742598,
		curso: 'Matematica',
		nota: '9'	
		},
		{
			nombre: 'Ezequiel', 
		apellido: 'Lopez',
		edad: 31,
		dni: 35789514,
		curso: 'Matematica',
		nota: '10'	
		},
	]

	const creaciones = estudiantes.map(a => crearEstudiante(a))
	await Promise.all(creaciones);
	await disconnectMongo();
}


main();