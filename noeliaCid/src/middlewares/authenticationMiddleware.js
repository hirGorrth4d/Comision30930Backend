import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import usersAPI from '../apis/usersAPI'
import logger from '../utils/logger'
import { EmailService } from '../services/email'
import Config from '../config'

const notificacion = async( req ) => { 


  const { firstName, lastName, email, age, isAdmin, password } = req.body
  const user = { firstName, lastName, email, age, isAdmin, password }


  const destination = Config.GMAIL_PARA_NOTIFICACIONES;
  const subject = 'Nuevo usuario registrado';
  const content = user;

  try {
    const response = await EmailService.sendEmail(
      destination,
      subject,
      content
    );
    logger.warn('Email enviado', response)
  } catch (error) {
    return console.log({message: error.message })
  }
}

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}

const login = async (req, email, password, done) => {
  const user = await usersAPI.getUserByEmail(email)
  const validPassword = await usersAPI.validateUserPassword(user, password)
  if (!user || !validPassword) {
    logger.warn('User not found: ' + email)
    return done(null, false, { message: 'Invalid Username/Password' })
  }
  logger.warn('User logged: ' + email)
  return done(null, user)
}

const signup= async (req, email, password, done) => {

  try {
    const { firstName, lastName, email, age, isAdmin, password } = req.body
    const user = { firstName, lastName, email, age, isAdmin, password }
    const newUser = await usersAPI.postUser(user)
    logger.warn('User created successfully', newUser)
    
    ///////////ENVIO DE NOTIFICACION
    notificacion(req)

    return done(null, newUser)

  } catch (error) {
    logger.error('Error while creating new user:', error)
    return done(null, false, { message: error.message })
  }
}




export const loginFunc = new LocalStrategy(strategyOptions, login)
export const signUpFunc = new LocalStrategy(strategyOptions, signup)

passport.serializeUser((user, done) => {
  done(null, user.email)
})

passport.deserializeUser((email, done) => {
  usersAPI.getUserByEmail(email).then((user) => {
    return done(null, user)
  })
})



export default passport