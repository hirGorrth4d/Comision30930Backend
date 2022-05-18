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
    "name": "Nombre del producto",
    "description": "una descripción",
    "stock": 6,
    "price": 100
}
}

PUT||   localhost:8080/api/productos/:id   => EDITA UN PRODUCTO POR ID
=>  FORMATO DEL OBJETO:
{

}

DELETE||    localhost:8080/api/productos/:id    => ELIMINA UN PRODUCTO POR ID


ENDPOINTS DE MENSAJES PARA POSTMAN:

GET||   localhost:8080/api/mensajes/:id  =>   TRAE TODOS LOS MENSAJES

POST||  localhost:8080/api/mensajes =>  CREA UN MENSAJE
=>  FORMATO DEL OBJETO:
{
    "name": "Noelia",
    "msg": "Hola! que tal como te va?"
}

