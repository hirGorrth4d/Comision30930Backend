##desafio clase 32
1-En la ruta /info se puede testear el uso de GZIP.

2- TODAS LAS RUTAS DE LA CARPETA ROUTES Cuentan con sus loggers.
INFO, se ve por consola y WARN Y ERRORS SE VEN EN UN ARCHIVO, en la carpeta logs.

EL MANEJO DE RUTAS INEXISTENTES: se encuentra en server.js, y lanza un warn log si la ruta pedida no existe.





----------------------------------------------------------------------------------------------------------------
##DESAFIO CLASE 30
Usar:
npm run prod:fork (Este no hace falta en realidad, simplemente no tiene el Argv modo CLUSTER)
npm run prod:cluster


Localhost/info muestra lo pedido.

Las partes de listados de procesos corrieron bien.

con 
npm run prod:pm2 se pueden probar las demas rutas

hay que ir a la ruta localhost/info para probar el endpoint comun y poder ver la info del proceso

y en el caso de localhost/api/random, se que cambia a los puertos que le dije en nginx, pero no supe como obtener el numero de puerto. solo el proceso, que es diferente a los de pm2 (corre en los puertos 8082,8083,8084,8085)