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
}


export const MsgModel = new RelationalDatabase(DBmensajes, 'mesagges')
export const ProductModel = new RelationalDatabase(DBproductos, 'products')