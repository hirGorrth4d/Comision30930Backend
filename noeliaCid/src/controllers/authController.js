import usersAPI from '../apis/usersAPI'

class AuthController {

  async userExists(req, res, next) {
    const user = await usersAPI.getUserByEmail(req.params.email)
    if (user) return res.status(404).json({ msg: 'User already registered' })
    next()
  }

  async logout(req, res) {
    req.session.destroy
    return res.status(200).json({ msg: 'User logged out' })
  }
}

const authController = new AuthController()
export default authController
