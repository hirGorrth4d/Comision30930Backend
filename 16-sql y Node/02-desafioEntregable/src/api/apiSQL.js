import knex from 'knex';
import dbConfig from '../../knexfile';

class DB {
  constructor() {
    const environment = process.env.NODE_ENV || 'production';
    console.log(`SETTING ${environment} DB`);
    const options = dbConfig[environment];
    this.connection = knex(options);
  }

  init() {
    this.connection.schema.hasTable('mensajes').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla mensajes!');

      return this.connection.schema.createTable(
        'mensajes',
        async (mensajesTable) => {
          mensajesTable.increments();
          mensajesTable.string('nombre').notNullable();
          mensajesTable.string('mensaje').notNullable();
          mensajesTable.timestamps(true, true);

          const initmensaje = [
            { nombre: 'Noe', mensaje: 'Hola, que tal como te va?' },
            { nombre: 'Noe', mensaje: 'Que frase mas vulgar..'  }
          ];

          const createMessages = initmensaje.map((aMsg) =>
            this.create('mensajes', aMsg)
          );
          await Promise.all(createMessages);
        }
      );
    });

    this.connection.schema.hasTable('productos').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla productos!');

      return this.connection.schema.createTable(
        'productos',
        async (productosTable) => {
          productosTable.increments();
          productosTable.string('nombre').notNullable();
          productosTable.decimal('precio', 4, 2);
          productosTable.string('thumbnail').notNullable();
          productosTable.timestamps(true, true);

          const initProducts = [{
            "nombre": "Nombre del producto",
            "precio": 100,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/plane-paper-toy-science-school-128.png"
          }]

          const createProducts = initProducts.map((aProduct) =>
            this.create('productos', aProduct)
          );
          await Promise.all(createProducts);
        }
      );
    });
  }

  get(tableName) {

    //if (id) return this.connection(tableName).where('id', id);
   
 this.connection(tableName).select('*')
  .then((tableName) {
        return tableName
   })
  .catch((err) => {
    console.log('There was an error selecting the table');
    console.log(err);
  )}
 }

  create(tableName, data) {
    return this.connection(tableName).insert(data);
  }

  update(tableName, id, data) {
    return this.connection(tableName).where('id', id).update(data);
  }

  delete(tableName, id) {
    return this.connection(tableName).where('id', id).del();
  }
}

export const DBService = new DB();
