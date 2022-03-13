class Usuario {
    nombre;
    apellido;
    libros;
    mascotas;


    constructor (nombre, apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    //MÉTODOS

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombreLibro,autorLibro){
        this.libros.push({ nombre: nombreLibro, autor: autorLibro })
    }

    getBooksNames(){
        const nombresLibros = []
        for (let i = 0; i < libros.length; i++) {
           
            nombresLibros.push(libros[i].nombre);           
       }
       return nombresLibros
    }
}

let nombre = "Noelia";
let apellido = "Cid";
const libros = [];
const mascotas = [];

const persona1 = new Usuario(nombre,apellido,libros,mascotas);

persona1.addMascota("Perra");
persona1.addMascota("Gato");
persona1.addBook("En cambio","Sebastian Barchrach");
persona1.addBook("El ocaso de los ídolos","Friedrich Nietzsche");

console.log("NOMBRE COMPLETO: ", persona1.getFullName());
console.log("CANTIDAD DE MASCOTAS: ", persona1.countMascotas());
console.log("LIBROS FAVORITOS: ", persona1.getBooksNames());