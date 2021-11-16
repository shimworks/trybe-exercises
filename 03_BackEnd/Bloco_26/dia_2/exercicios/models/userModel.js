const { connection } = require('./connection');

const insertUser = async (user) => {
  const mongoRes = await connection().collection('authors').find().toArray()
  return mongoRes;
}

module.exports = { insertUser };