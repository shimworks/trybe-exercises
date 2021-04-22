// Parte 1
let a = 15;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Parte 2
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// Parte 3
let c = 90;
let d = 60;
let e = 80;

let maior = c

if (d > maior && d > e){
    maior = d;
}else if(e > maior && e > d){
    maior = e;
}
console.log(maior)

// Parte 4
let number = -0

if (number > 0){
    console.log("positive")
} else if (number < 0){
    console.log("negative")
} else {
    console.log("zero")
}

// Parte 5
let angulo1 = 60
let angulo2 = 60
let angulo3 = 60

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        console.log("erro");
}   else if (angulo1 + angulo2 + angulo3 == 180){
        console.log("true");
}   else if (angulo1 + angulo2 + angulo3 != 180){
        console.log("false");
} 

//Parte 6
let chessPiece = 'Peão';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log("Rei: Uma casa apenas para qualquer direção.");
    break;

  case 'bispo':
    console.log("Bispo: Diagonal.");
    break;

  case 'rainha':
    console.log("Rainha: Diagonal, horizontal e vertical.");
    break;

  case 'cavalo':
    console.log("Cavalo: L pode pular sobre as peças.");
    break;

  case 'torre':
    console.log("Torre: Horizontal e vertical.");
    break;

  case 'peão':
    console.log("Peão: Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;

  default:
    console.log("Erro, peça inválida");
    break;
}
