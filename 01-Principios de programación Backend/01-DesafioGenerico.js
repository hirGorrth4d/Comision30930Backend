//1--DEFINIR VALORES QUE ALMACENEN LOS SIGUIENTES DATOS:


// UN NOMBRE
let nombre = "Noelia"

//UNA EDAD
let edad = 29

//UN PRECIO
let precio = 210.50

//LOS NOMBRES DE MIS SERIES FAVORITAS
const misSeriesFavoritas = [
    "Game of thrones",
    "Dark",
    "The office",
]

//MIS PELICULAS FAVORITAS, CON SU NOMBRE, FECHA DE LANZAMIENTO Y ACTORES PRINCIPALES
const misPeliculasFavoritas = [
    {
        movie: 'The Sandlot',
        year: '1993',
        actors:["Mike Vitar", "Patrick Renna", "Tom Guiry"]
    },
    {
        movie: 'Back to the Future',
        year: '1985',
        actors:["Michael J. Fox", "Christopher Lloyd", "Thomas F. Wilson"]
    },
    {
        movie: 'Matilda',
        year: '1996',
        actors:["Danny DeVito", "Mara Wilson", "Kiami Davael"]
    }
]

//MOSTRAR TODOS LOS VALORES POR CONSOLA

console.log(`Hola! Mi nombre es ${nombre}`);
console.log(`Tengo ${edad} años`);
console.log(`Lo último que compre me salió $${precio}`);
console.log(`Mis series favoritas son: ${misSeriesFavoritas}`);
console.log(`Mis peliculas favoritas son: `);

for (let index = 0; index < misPeliculasFavoritas.length; index++) {
    const movie = misPeliculasFavoritas[index];
    console.log(`${movie.movie} que se estreno en el año ${movie.year} y en la que actuan ${movie.actors}`);
    
}

//INCREMENTAR LA EDAD EN 1 Y VOLVER A MOSTRARLA

edad++
console.log(`El 04/02/2023 voy a cumplir ${edad}`);

//AGREGAR UNA SERIE A LA LISTA Y VOLVER A MOSTRARLA

misSeriesFavoritas.push("The big bang Theory");

console.log(`Casi me olvidaba! mis series favoritas son 4 ${misSeriesFavoritas}`);
