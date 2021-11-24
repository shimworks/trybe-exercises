const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullname = [firstName, middleName, lastName].filter((n) => n).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullname
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
}