// // Aprofunde 01
// let num = 5;
// let stars = "*";
// let linha = "";
// for (let index = 0; index < num; index += 1) {
//     linha = linha + stars
// };
// for (let index = 0; index < num; index += 1) {
//     console.log(linha);
// };

// // Aprofunde 02
// let num = 5;
// let stars = "*";
// let linha = "";
// for (let index = 0; index < num; index += 1) {
//     linha = linha + stars
//     console.log(linha)
// };

// Aprofunde 03
// let num = 5;
// let stars = "*";
// let linha = "";
// let posicao = num;

// for (let indexLinha = 0; indexLinha < num; indexLinha += 1) {
//     for (let indexColuna = 1; indexColuna <= num; indexColuna += 1){
//         if (indexColuna < posicao){
//             linha = linha + ' ';
//         } else {
//             linha = linha + stars;
//         };
//     };
//     console.log(linha);
//     linha = "";
//     posicao -= 1;
// };

// // Aprofunde 4
// let num = 5;
// let estrela = "*";
// let linha = "";

// let meio = (num + 1) / 2;
// let esquerda = meio;
// let direita = meio;

// for (let indexLinha = 0; indexLinha <= meio; indexLinha += 1) {
//     for (let indexColuna = 0; indexColuna <= num; indexColuna += 1) {
//         if (indexColuna > esquerda && indexColuna < direita) {
//             linha = linha + estrela;
//         } else {
//             linha = linha + " ";
//         }
//     }
//     console.log(linha);
//     linha = "";
//     direita += 1;
//     esquerda -= 1;
// }

// // Bonus 5
// let num = 21;
// let meio = (num + 1) / 2;
// let bordaEsq = meio;
// let bordaDir = meio;
// let estrela = "*";

// for (let indexLinha = 1; indexLinha <= meio; indexLinha += 1) {
//     let linha = "";
//     for (let indexColuna = 1; indexColuna <= num; indexColuna += 1) {
//         if (indexColuna == bordaEsq || indexColuna == bordaDir || indexLinha == meio) {
//             linha += estrela
//         } else {
//             linha += " ";
//         };
//     };
//     bordaEsq -= 1;
//     bordaDir += 1;
//     console.log(linha);
// }