const { valPassword } = require('../services/validationServices')

module.exports = (req, res, next) => {
  const { password } = req.body
  if (valPassword(password)) {
    return next();
  }
  const error = {
    error: true,
    message: "O campo 'password' deve ter pelo menos 6 caracteres",
  }
  return res.status(401).json(error)
}