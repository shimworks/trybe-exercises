// // Prática Objetos e For/In
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pado Donald',
// };
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// }
// // console.log(`Bem-vinda, ${info.personagem}.`);
// info.recorrente = 'Sim';
// // console.log(info)
// // for (let key in info) {
// //     console.log(key)
// // };
// // for (let key in info) {
// //     console.log(info[key])
// // };
// for (let key in info) {
//     if (info[key] === info.recorrente && info[key] === 'Sim' && info2[key] === 'Sim') {
//         console.log("ambos recorrentes")
//     } else if (key === "personagem" || 'origem' || 'nota') {
//         console.log(info[key] + " e " + info2[key])
//     }
// }

// // Prática Funções 01
// let pali = false
// function checkArray(palavra) {
//     let nowArray = palavra.split('')
//     let invArray = "";
//     for (let index = (nowArray.length - 1); index >= 0; index -= 1){
//         invArray = invArray + nowArray[index]
//         }
//         if (palavra == invArray){
//             return pali = true
//         } else {
//             return pali = false
//     }
// }
// console.log(checkArray("desenvolvimento"))

// // Prática Funções 02
// function indiceMaior() {
//     let arrayTeste = [2, 3, 6, 7, 10, 1];
//     let valor = arrayTeste[0];
//     for (let indice = 0; indice < arrayTeste.length; indice += 1) {
//         if (arrayTeste[indice] > valor){
//          valor = indice;
//      };
//     };
//     return valor;
// };
// console.log(indiceMaior())

// // Prática Funções 03
// function indiceMenor() {
//     let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
//     let valor = arrayTeste[0];
//     let resultado = 0;
//     for (let indice = 0; indice < arrayTeste.length; indice += 1) {
//         if (arrayTeste[indice] < valor) {
//             valor = arrayTeste[indice]
//             resultado = indice
//         }
//     }
//     return resultado
// }
// console.log(indiceMenor())

// // Prática 04
// function maiorNome() {
//     let arrayTeste = ["José", 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
//     valor = ""
//         for (let indexName = 0; indexName < arrayTeste.length; indexName += 1) {
//             for (let indexCount = 0; indexCount <= arrayTeste[indexName].length; indexCount += 1) {
//                 if (arrayTeste[indexName].length > valor.length){
//                     valor = arrayTeste[indexName]
//                 }
//             }

//         }
//  return valor
// };
// console.log(maiorNome());

// // Prática 05 (Falta entender o processo de checkagem dos valores)
// function repetido() {
//     let arrayTeste = [2, 3, 2, 5, 8, 2, 3]
//     let repete = 1
//     let valor = 0
//     let resultado
//     for (let indexArray = 0; indexArray < arrayTeste.length; indexArray += 1) {
//             for (let index = 0; index < arrayTeste.length; index += 1) {
//                 if (arrayTeste[indexArray] === arrayTeste[index]) {
//                     valor += 1;
//                     if (repete < valor) {
//                         repete = valor;
//                         resultado = arrayTeste[indexArray];
//                     } 
//                 }
//             }
//             valor = 0
//         }
//     return resultado
// }
// console.log(repetido());

function somaGaus(){
    for (let indice = 0; indice = array.length; indice += 1) {
        
    }
}