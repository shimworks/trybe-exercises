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
let num = 5;
let stars = "*";
let linha = "";
let posicao = num;

for (let indexLinha = 0; indexLinha < num; indexLinha += 1) {
    for (let indexColuna = 1; indexColuna <= num; indexColuna += 1){
        if (indexColuna < posicao){
            linha = linha + ' ';
        } else {
            linha = linha + stars;
        };
    };
    console.log(linha);
    linha = "";
    posicao -= 1;
};
