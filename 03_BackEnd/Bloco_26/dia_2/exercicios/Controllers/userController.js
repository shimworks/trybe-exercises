const { includeUser } = require('../services/includeUser')

const addUser = async (req, res, _next) => {
  const { firstName, lastName, email } = req.body
  const user = await includeUser(firstName, lastName, email)
  res.status(201).json(user);
}

module.exports = { addUser }