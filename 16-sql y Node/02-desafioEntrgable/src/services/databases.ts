import knex from 'knex'
import DBproductos from './options/mariaDB'
import DBmensajes from './options/sqlite'


class RelationalDatabase {
    connection: any
    tableName: any

    constructor(config: any ,tableName: string){

        this.connection = knex(config)
        this.tableName = tableName
    }
    get(id?: number) {
        if (id) return this.connection(this.tableName).where('id', id);
    
        return this.connection(this.tableName);
      }
    
      create(data: any) {
        return this.connection(this.tableName).insert(data);
      }
    
      update(id: number, data: any) {
        return this.connection(this.tableName).where('id', id).update(data);
      }
    
      delete(id: number) {
        return this.connection(this.tableName).where('id', id).del();
      }
    }

const productsTableName = 'products'
const messagesTableName = 'mesagges'

export const ProductModel = new RelationalDatabase(DBproductos, productsTableName)
export const MsgModel = new RelationalDatabase(DBmensajes, messagesTableName)


const dbMsg = knex(DBmensajes);

const initMsgTable = async () => {
	await dbMsg.schema.createTable(messagesTableName, async (msgTable) => {
		console.log('done')
		msgTable.increments();
		msgTable.string('name').notNullable();
		msgTable.string('msg').notNullable();
		msgTable.timestamps(true, true);

		const initMsg = [
			{
				name: 'User1',
				msg: 'Hola'
			}
        ]
		const createMsg = initMsg.map((aMsg) =>
        dbMsg(messagesTableName).insert(aMsg)
		);
		await Promise.all(createMsg);
	})
}

export const initMsgDb = async () => {
		const msgTableExists = await dbMsg.schema.hasTable(messagesTableName);
		if(!msgTableExists){
			console.log('Msg Table not exists, creating it');
			await initMsgTable();
		}
}
/////////PRODUCTOS

const dbProducts = knex(DBproductos);

const initProductsTable = async () => {
	await dbProducts.schema.createTable(productsTableName, async (productsTable) => {
		console.log('done')
		productsTable.increments();
		productsTable.string('name').notNullable();
		productsTable.integer('stock').notNullable();
		productsTable.decimal('price', 4, 2);
		productsTable.timestamps(true, true);

		const initProducts = [
			{
				name: 'cartuchera',
				stock: 20,
				price: '10.5',
			},
			{
				name: 'pendrive',
				stock: 20,
				price: '99.4',
			},
		];
		const createProducts = initProducts.map((aProduct) =>
        dbProducts(productsTableName).insert(aProduct)
		);
		await Promise.all(createProducts);
	})
}

export const initDb = async () => {
		const productsTableExists = await dbProducts.schema.hasTable(productsTableName);
		if(!productsTableExists){
			console.log('Products Table not exists, creating it');
			await initProductsTable();
		}
}