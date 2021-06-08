function execute() {
  return new Promise((resolve, reject) => {
    let arraySum = numGen();
    if (arraySum > 8000) {
      return reject(new Error (arraySum));
    }
    resolve(arraySum);
  })
  .then(arrSum => div(arrSum))
  .then(arrDiv => sum(arrDiv))
  .catch(error => console.log(`É mais de oito mil! Essa promise deve estar quebrada! ${error}`))
}
execute();

function div(param) {
  const divd = [2,3,5,10]
  let result = []
  const exec = () => divd.forEach((elem) => result.push(param/elem))
  exec();
  console.log(`div = ${result}`)
  return result
}

function sum(param) {
  let rest = param.reduce((acc, cur) => acc + cur)
  console.log(`sum = ${rest}`)
  return rest
}
function numGen() {
  let index = 0
  let array = []
  const numGen = () => Math.pow(Math.round(Math.random()*50), 2)
  while (index < 10) {
    array.push(numGen())
    index += 1
  }
  let arraySum = array.reduce((acc, cur) => acc + cur)
  console.log(`arraySum = ${arraySum}`)
  return arraySum
}
