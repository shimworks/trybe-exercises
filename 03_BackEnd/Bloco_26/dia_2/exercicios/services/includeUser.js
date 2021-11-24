const includeUser = (firstName, lastName, email) => {
  const user = {
    id: 1,
    firstName,
    lastName,
    email
  }
  return user
}

module.exports = { includeUser }