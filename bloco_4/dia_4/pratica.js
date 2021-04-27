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

// Prática Funções 02
