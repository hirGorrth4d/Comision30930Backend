
export const isLoggedIn = (req, res, next) => {
  console.log('Is Authenticated')
  console.log(req.isAuthenticated())
  if (!req.isAuthenticated()) return res.status(401).json({ msg: 'Unathorized' })
  next()
}

export const isAdmin = (req, res, next) => {
  console.log('Is Admin Middleware')
  console.log(req.user)
  if (!req.user.admin) return res.status(401).json({ msg: 'Unathorized - Admin Only' })
  next()
}
