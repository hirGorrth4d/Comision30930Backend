const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
import { normalize, schema } from 'normalizr';

const author = new schema.Entity('author', {}, { idAttribute: 'email' });

const msge = new schema.Entity(
  'message',
  {
    author: author,
  },
  { idAttribute: '_id' }
);
const msgesSchema = new schema.Array(msge);

//Esto solo va a funcionar si el archivo ya existe
class Mensajes {
    constructor(nombreArchivo) {
        this.archivo = nombreArchivo;
    }

    async getData() {
        const data = await fs.promises.readFile(this.archivo, 'utf-8'); //data = '[]'
        return JSON.parse(data);
    }

    async saveData(data) {
        await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
    }

    //GET
    async get() {
        const data = await this.getData();
        let normalizedMessages = normalize(data, msgesSchema);
        return normalizedMessages;
    }
    async getDesnormalized() {
        const data = await this.getData();
        return data;
    }
    //POST
    async post(miObjeto) {
        const data = await this.getData();

        const mensajeNuevo = {
            _id: uuidv4(),
            author: {
                email: miObjeto.email,
                nombre: miObjeto.nombre,
                apellido: miObjeto.apellido,
                edad: miObjeto.edad,
                alias: miObjeto.alias,
                avatar: miObjeto.avatar,
            },
            text: miObjeto.mensaje
        }
        

        data.push(mensajeNuevo);
        await this.saveData(data);
    }
}

const MensajesController = new Mensajes('mensajes.json');

module.exports = {
    MensajesController: MensajesController,
};