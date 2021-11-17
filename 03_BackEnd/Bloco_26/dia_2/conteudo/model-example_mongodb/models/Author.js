const connection = require('./connection');

const DB_COLLECTION = 'authors'

//mongodb
const getAll = async () => {
  const db = await connection();

  const data = await db.collection(DB_COLLECTION).find().toArray();

  const arr = data.map((author) => getNewAuthor(author));
  
  return arr;
}

const getNewAuthor = (authorData) => {
  const { _id: id, firstName, middleName, lastName } = authorData;

  const fullname = [firstName, middleName, lastName].filter((field) => field).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullname
  };
};


// .find().toArray()

module.exports = {
  getAll,
}