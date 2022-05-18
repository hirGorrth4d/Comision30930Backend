||DESAFIO CLASE 16||

ENDPOINTS DE PRODUCTOS PARA POSTMAN:

GET||   localhost:8080/api/productos  =>  TODOS LOS PRODUCTOS

GET||   localhost:8080/api/productos/:id  =>   UN PRODUCTO POR ID

POST||  localhost:8080/api/productos =>  CREA UN PRODUCTO
=>  FORMATO DEL OBJETO:
{
GET||   localhost:8080/api/productos/:id  =>   UN PRODUCTO POR ID

POST||  localhost:8080/api/productos =>  CREA UN PRODUCTO
=>  FORMATO DEL OBJETO:
{
    "nombre": "Nombre del producto",
    "precio": 100,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/plane-paper-toy-science-school-128.png"
}

PUT||   localhost:8080/api/productos/:id   => EDITA UN PRODUCTO POR ID
=>  FORMATO DEL OBJETO:
{
    "nombre": "Nombre del producto",
    "precio": 100,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/plane-paper-toy-science-school-128.png"
}

DELETE||    localhost:8080/api/productos/:id    => ELIMINA UN PRODUCTO POR ID


ENDPOINTS DE MENSAJES PARA POSTMAN:

GET||   localhost:8080/api/mensajes/:id  =>   TRAE TODOS LOS MENSAJES

POST||  localhost:8080/api/mensajes =>  CREA UN MENSAJE
=>  FORMATO DEL OBJETO:
{
    "nombre": "Noelia",
    "mensaje": "Hola! que tal como te va?"
}

