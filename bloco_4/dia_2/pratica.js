// // Pratica 01
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let i = 0; numbers.length > i; i += 1){
//     console.log(numbers[i]);
// }

// // Pratica 02
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
// }
// console.log(soma);

// // Pratica 03
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
// }
// soma = soma / numbers.length
// console.log(soma);

// // Pratica 04
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
// }
// soma = soma / numbers.length
// console.log(soma);
// if (soma > 20){
//     console.log("valor maior que 20");
// } else{
//     console.log("valor menor ou igual a 20");
// }

// // Pratica 05
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//     if (soma < numbers[index]){
//         soma = numbers[index]
//     } 
// }
// console.log(soma)

// // Pratica 06
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impares = 0
// for (let index = 0; index < numbers.length; index += 1){
//     if (1 == numbers[index] % 2){
//         impares += 1
//     }
// }
// if (impares == 0){
//     console.log("nenhum valor impar encontrado")
// } else if (impares > 0){
//     console.log(impares)
// }

// // Pratica 07
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = numbers[0]
// for (let index = 0; index < numbers.length; index += 1){
//     if (menor > numbers[index]){
//         menor = numbers[index]
//     }
// }
// console.log(menor)

// // Pratica 08
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let array = [] 
// for (let index = 0; index <= 25; index += 1){
//     array.push(index)
// }
// console.log(array)

// Pratica 09
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [] 
for (let index = 0; index <= 25; index += 1){
    array.push(index / 2)
}
console.log(array)
