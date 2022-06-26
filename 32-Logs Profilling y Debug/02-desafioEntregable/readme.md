#Para correr la primera parte del desafío:

Usar:
npm run prod:fork (Este no hace falta en realidad, simplemente no tiene el Argv modo CLUSTER)
npm run prod:cluster


Localhost/info muestra lo pedido.

Las partes de listados de procesos corrieron bien.

con 
npm run prod:pm2 se pueden probar las demas rutas

hay que ir a la ruta localhost/info para probar el endpoint comun y poder ver la info del proceso

y en el caso de localhost/api/random, se que cambia a los puertos que le dije en nginx, pero no supe como obtener el numero de puerto. solo el proceso, que es diferente a los de pm2 (corre en los puertos 8082,8083,8084,8085)