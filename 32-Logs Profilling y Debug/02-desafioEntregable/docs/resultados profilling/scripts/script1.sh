

#Ejecutamos artillery al endpoint de autenticacion bloqueante
#Su resultado lo vamos a plasmar en el archivo result_bloq.txt
artillery quick --count 10 -n 50 "http://localhost:8081/info" > result_nobloq.txt
artillery quick --count 10 -n 50 "http://localhost:8081/info" > result_bloq.txt

#Una vez que se haya ejecutado el script. tomar el nombre del archivo isolate y ejecutar
# node.exe --prof-process foo.log > resultadoNoBloqueante.txt