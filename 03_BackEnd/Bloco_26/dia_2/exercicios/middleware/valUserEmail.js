const { valEmail } = require('../services/validationServices')

module.exports = (req, res, next) => {
  const { email } = req.body
  if (valEmail(email)) {
    return next();
  }
  const error = {
    error: true,
    message: "O campo 'email' está inválido",
  }
  return res.status(401).json(error)
}