const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

// let clickcount = 0
// const butao = document.getElementById('btn')
// const div = document.getElementsByTagName('div')[0]
// butao.addEventListener('click',()=> div.innerHTML = clickcount += 1)


const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

const frase = 'Tryber x aqui'

const trocaX = palavra => func2(frase.replace('x', palavra));
const func2 = frase => `${frase}! Minhas cinco principais habilidades são:${array.toLocaleString().replace(/,/g,', ')}`;
console.log(trocaX('package'));