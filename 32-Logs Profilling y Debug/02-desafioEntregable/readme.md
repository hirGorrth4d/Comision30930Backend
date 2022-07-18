##desafio clase 32
1-En la ruta /info se puede testear el uso de GZIP.

2- TODAS LAS RUTAS DE LA CARPETA ROUTES Cuentan con sus loggers.
INFO, se ve por consola y WARN Y ERRORS SE VEN EN UN ARCHIVO, en la carpeta logs.

EL MANEJO DE RUTAS INEXISTENTES: se encuentra en server.js, y lanza un warn log si la ruta pedida no existe.



3- PROFILING:

CORRER COMANDO NPM RUN start:profilling

y luego: 
artillery quick --count 10 -n 50 "http://localhost:8081/info" > result_nobloq.txt
artillery quick --count 10 -n 50 "http://localhost:8081/info" > result_bloq.txt

4- autocannon

Correr el comando: npm run start:autocannon
 y el script:  autocannon -c 100 -d 15 'http://localhost:8081/info'

 los resultados de las pruebas estan en la carpeta /docs