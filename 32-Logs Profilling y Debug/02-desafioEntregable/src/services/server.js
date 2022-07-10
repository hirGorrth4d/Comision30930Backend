import config from '../config/index'
import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import mainRouter from "../routes";
import randomRouter from '../routes/randomRouter.js'
import session from "express-session";
import passport from "passport";
import { loginFunc, signupFunc } from "./auth";
import MongoStore from 'connect-mongo'
import { logger } from '../utils/logger';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Inicializar express-session

const ttlSeconds = 600;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: config.MONGO_ATLAS_URL,

  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

//Inicializamos Passport
app.use(passport.initialize());

//Le permitimos a passport que pueda manipular las sesiones
app.use(session(StoreOptions));

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

//Lógica que ataja el Login de los usuarios
passport.use("login", loginFunc);

//Lógica que ataja el SignUp de los usuarios
passport.use("signup", signupFunc);

const publicPath = path.resolve(__dirname, "../../public");
app.use(express.static(publicPath));

const layoutDirPath = path.resolve(__dirname, "../../views/layouts");
const defaultLayerPth = path.resolve(__dirname, "../../views/layouts/main.hbs");
const partialDirPath = path.resolve(__dirname, "../../views/partials");

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    layoutsDir: layoutDirPath,
    extname: "hbs",
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

app.use(mainRouter);
app.use('/api', randomRouter)

//MANEJO DE RUTAS INEXISTENTES
app.use( (req,res) => {
  res.status(404)
  logger.warn('RUTA: /rutas inexistentes || METODO: get')
})

export default app;
