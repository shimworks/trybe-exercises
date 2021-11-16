const { valLastName } = require('../services/validationServices')

module.exports = (req, res, next) => {
  const { lastName } = req.body
  if (valLastName(lastName)) {
    return next();
  }
  const error = {
    error: true,
    message: "O campo 'lastName' precisa ser preenchido",
  }
  return res.status(401).json(error)
}