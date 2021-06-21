const wake = () => 'Acordando!'
const coffe = () => 'Bora tomar café!'
const sleep = () => 'Partiu dormir!'

const call = (funcName) => funcName();

console.log(call(coffe))