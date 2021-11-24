const express = require('express');

const connection = require('./models/connection')

const app = express();

const PORT = process.env.PORT || 3000;

const { addUser } = require('./Controllers/userController')

const valUserEmail = require('./middleware/valUserEmail')
const valUserFirstName = require('./middleware/valUserFirstName')
const valUserLastName = require('./middleware/valUserLastName')
const valUserPassword = require('./middleware/valUserPassword')

app.use(express.json());

app.post('/user', valUserEmail, valUserFirstName, valUserLastName, valUserPassword, addUser)

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).end();
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});