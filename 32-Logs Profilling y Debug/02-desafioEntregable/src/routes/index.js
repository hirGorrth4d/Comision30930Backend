import passport from 'passport';
import os from 'os';
import { Router } from "express";
import compression from 'compression';
import { logger } from '../utils/logger';

const router = Router();

//////////////DESAFIO CLASE 28
//////////////////////PROCESOS
const numCPUs = os.cpus().length;
console.log('nro CPUs -->> ', numCPUs);

const infodelProceso = {
  args: process.argv.slice(2),
  plataforma: process.platform,
  nodeVersion: process.version,
  memoria: JSON.stringify(process.memoryUsage.rss()),
  execPath: process.cwd(),
  processID: process.pid,
  carpeta: process.argv[1],
  cantidadNucleos: numCPUs

}

router.get('/info', compression(), (req,res) => {
  try {
    logger.info('RUTA: /info || METODO: get')
    const data = infodelProceso
    res.render('info', {data})
  } catch (error) {
    logger.error('RUTA: /info || METODO: get')
  }
})


//------------------------------------------------------------------------//
//passport
const passportOptions = { badRequestMessage: "falta username / password" };

//Middleware
const isLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) { 
    res.redirect('/login') 
  }else{
    next();
  }

}

/* --------- REGISTER ---------- */
router.get('/signup', (req, res) => {
  try {
    logger.info('RUTA: /signup || METODO: get')
    res.render('register');
  } catch (error) {
    logger.error('RUTA: /signup || METODO: get')
  }
});
//SIGN UP
router.post('/signup', (req, res, next) => {
  logger.info('RUTA: /signup || METODO: post')
  passport.authenticate('signup', passportOptions, (err, user, info) => {

    if (err) {
      logger.error('RUTA: /signup || METODO: post')
      return next(err);
    }
    if (!user) {
      logger.warn('RUTA: /signup || METODO: post')
      return res.render('register-error')}

    res.render('usuarioCreado')
  })(req, res, next);
});

/* --------- LOGIN ---------- */
router.get('/login', (req, res) => {
  logger.info('RUTA: /login || METODO: get')
  res.render('login')
})
/* --------- LOGIN-Error---------- */
router.get('/login-error', (req, res) => {
  logger.error('RUTA: /login || METODO: get')
  res.render('login-error')
});
//LOGIN
router.post('/login',
  passport.authenticate('login',{failureRedirect: '/login-error', failureMessage: true}),
  (req, res) => {
    try {
      logger.info('RUTA: /login || METODO: post')
      res.redirect('/datos')
    } catch (error) {
      logger.error('RUTA: /login || METODO: post')
    }
  },
)

/* --------- DATOS ---------- */
router.get('/datos', isLoggedIn, async(req, res,) => {
  try {
    logger.info('RUTA: /datos || METODO: get')
    const datos = req.user
    const nombre = datos.username
    res.render('datos', {nombre})
  } catch (error) {
    logger.error('RUTA: /datos || METODO: get')
  }
})

//GET
router.get("/",(req, res) => {
  logger.info('RUTA: / || METODO: get')
  res.redirect('/datos')
});

/* --------- LOGOUT ---------- */
router.get('/logout', (req, res) => {
  logger.info('RUTA: /logout || METODO: get')
  const datos = req.user
  const nombre = datos.username
  res.render('logout',{nombre})
  req.session.destroy()
});

export default router;
