import { faker } from '@faker-js/faker'

faker.locale = 'es';

const fakerDB = [];

for(let i =0; i<5; i++){
    fakerDB.push({
        thumbnail:faker.image.imageUrl(),
        id:faker.database.mongodbObjectId(),
        nombre: faker.commerce.product(),
        precio:faker.commerce.price(100, 4500, 0)
    })
}

class Productos {
    constructor(nombreArray) {
        this.arrayContenedor = nombreArray;
    }

    //GET
    async get() {
        const productos = await this.arrayContenedor;
        return productos;
    }
}


const ProductosController = new Productos(fakerDB);

module.exports = {
    ProductosController: ProductosController,
};