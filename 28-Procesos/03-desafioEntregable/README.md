# Desafío clase 28 || PROCESOS ||


## Puerto de escucha:

Para correr la aplicación en otro puerto se puede correr el script: 
**npm run puerto**
**USAR ESTE PARA VER TODOS LOS ENDPOINTS**

En el package.json esta indicado que corra en el puerto **3000**
Sino,  si corremos 
|| **npm run dev** o **npm start** ||
 correrá por defecto en el puerto **8080**
**(SE ESTA UTILIZANDO MINIMIST PARA GESTIONAR ESTOS ARGUMENTOS)**
en el archivo (/index.js)


## Endpoints:
En el archivo PostmanCollections, se pueden encontrar los endpoints:

**localhost:3000**  => devolverá una consulta **NO-BLOQUEANTE**

**localhost:3000/info**  => devolverá una un cuadro con la información correspondiente al proceso, que se estan obteniendo mediante process.argv.

**Lo corremos con puerto 3000 (npm run puerto), porque sino no muestra los argumentos pasados (por el método .slice).**

**localhost:3000/api/randoms**  => devolverá una consulta **BLOQUEANTE**, que por defecto realiza la operación (/utils/operacion.js) solicitando 100.000.000 número aleatorios por defecto.

**localhost:3000/api/randoms?cant=500000000**  => devolverá una consulta **BLOQUEANTE**, que realiza la operación (/utils/operacion.js) solicitando 500.000.000 número aleatorios.

Estos dos últimos son manejados por **randomRouter** (/routes/randomRouter.js).

En estos últimos casos, se genera un child-process con **Fork** que resuelve la consulta permitiendo que los demás endpoints no se bloqueen.
El proceso padre, le envía un mensaje al child-process indicando la cantidad de números aleatorios que solicita a través de el evento **.send** que recibe por **req.query**, y el child-process le devuelve el resultado de la operación con el evento **on**.

El algoritmo en operacion.js si recibe algún número lo utiliza, sino usa 1000000 por defecto.-



