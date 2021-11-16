const reg = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

const valEmail = (email) => reg.test(email);

const valFirstName = (fName) => fName === '' || fName === null  ? false : true;

const valLastName = (lName) => lName === '' || lName === null  ? false : true;

const valPassword = (pass) => pass.length > 6;

module.exports = { valEmail, valFirstName, valLastName, valPassword }