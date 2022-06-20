const express = require('express')
const app = express()

const PORT = parseInt(process.argv[2]) || 8080

app.get('/datos', (req, res) => {
    console.log(`port: ${PORT} -> FyH: ${Date.now()}`);
    res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`) 
})

app.listen(PORT, err =>{
    if(!err) console.log(`Servidor expree escuchando el puerto ${PORT} - PID WORKER ${process.pid}`);
})