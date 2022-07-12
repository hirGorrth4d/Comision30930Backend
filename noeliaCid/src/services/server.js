import express from 'express'
import Logger from '../utils/logger'
import { connectionURL } from '../utils/mongoConecction'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import path from "path";
import session from 'express-session'
import passport from 'passport'
import { loginFunc, signUpFunc } from '../middlewares/authenticationMiddleware'
import handlebars from 'express-handlebars'
import * as http from 'http'
import routes from '../routes'
import compression from 'compression'

const app = express()

console.log(
  `******************************** \n    Starting application \n ********************************`
)

// paths
Logger.info(process.cwd() + '/public')
const publicFolderPath = process.cwd() + '/public'
const uploadsFolderPath = process.cwd() + '/assets/images'
const layoutDirPath = path.resolve(__dirname, "../../views/layouts");
const defaultLayerPth = path.resolve(__dirname, "../../views/layouts/main.hbs");
const partialDirPath = path.resolve(__dirname, "../../views/partials");

//Error Handler
const errorHandler = (err, req, res, next) => {
  Logger.error(`HUBO UN ERROR ${err}`)
  res.status(500).json({
    err: err.message
  })
}
app.use(errorHandler)

// Setea el uso de compresion.
app.use(compression())

// Express & Handlebars Setup
app.use(express.static(publicFolderPath))
app.use(express.static(uploadsFolderPath))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')

app.engine(
  "hbs",
  handlebars({
    layoutsDir: layoutDirPath,
    extname: "hbs",
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

const unaHora = 1000 * 60 * 60
const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: connectionURL,
    dbName: 'persistencia',
    stringify: false,
    autoRemove: 'interval',
    autoRemoveInterval: 1
  }),
  secret: 'SuperSecreto',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: { maxAge: unaHora }
}

app.use(cookieParser())
app.use(session(StoreOptions))
app.use(passport.initialize())
app.use(passport.session())
passport.use('login', loginFunc)
passport.use('signup', signUpFunc)

app.get('/images', (req, res) => {
  res.render(process.cwd() + '/assets/images')
})

// Use routers
app.use(routes);
app.use('/api', routes)


// Default response
app.use(function (req, res) {
  res.status(404).json({
    message: 'invalid address'
  })
})

const myServer = new http.Server(app)
export default myServer
