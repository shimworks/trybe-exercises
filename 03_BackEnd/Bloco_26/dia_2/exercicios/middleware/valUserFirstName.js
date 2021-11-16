const { valFirstName } = require('../services/validationServices')

module.exports = (req, res, next) => {
  const { firstName } = req.body
  if (valFirstName(firstName)){
    return next();
  } 
  const error = {
    error: true,
    message: "O campo 'firstName' precisa ser preenchido",
  }
  return res.status(401).json(error)
}