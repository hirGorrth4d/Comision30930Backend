import express from 'express';
import mainRouter from '../routes';
import http from 'http';
import path from 'path'

const app = express();

app.use(express.json());

app.use(function (err, req, res, next) {
  return res.status('500').json({
    msg: 'There was an unexpected error',
    error: err.message,
  });
});

const publicPath = path.resolve(__dirname,'../../public');
app.use(express.static(publicPath));

//CONFIGURACIÓN DE ejs
app.set('view engine', 'ejs');

const viewPath = path.resolve(__dirname, '../../views')
app.set('views', viewPath);

app.get('/', async (req, res) => {
  res.render('pages/index')
})

app.use('/api', mainRouter);

const httpServer = http.Server(app);

export default httpServer;
