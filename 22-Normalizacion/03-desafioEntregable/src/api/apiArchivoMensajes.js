const fs = require('fs');
//const { v4: uuidv4 } = require('uuid');

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
        return data;
    }
    //POST
    async post(miObjeto) {
        const data = await this.getData();

        const mensajeNuevo = {
            author: {
                id: miObjeto.id,
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