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

//Parte 7
let porcentagem = 110

if (porcentagem >= 90 && porcentagem <= 100){
    console.log("A");
} else if (porcentagem >= 80 && porcentagem < 90){
    console.log("B");
} else if (porcentagem >= 70 && porcentagem < 80){
    console.log("C");
} else if (porcentagem >= 60 && porcentagem < 70){
    console.log("D");
} else if (porcentagem >= 50 && porcentagem < 60){
    console.log("E");
} else if (porcentagem > 0 && porcentagem < 50){
    console.log("F")
} else {
    console.log("Error");
}

// Parte 8
let num1 = 5
let num2 = 6
let num3 = 7

if ((num1 % 2) == 0 || (num2 % 2) == 0 || (num3 % 2) == 0){
    console.log("true");
} else {
    console.log("false");
}

//Parte 9
let num1 = 6
let num2 = 6
let num3 = 6

if ((num1 % 2) == 1 || (num2 % 2) == 1 || (num3 % 2) == 1){
    console.log("true");
} else {
    console.log("false");
}

//Parte 10
let custo = 50;
let venda = 100;

custototal = custo * 1.20
lucro = (venda - custototal) * 1000

if (custo < 0 || venda < 0){
    console.log("error");
} else if (lucro > 0){
    console.log(lucro)
} else {
    console.log("prejuizo")
}

//Parte 11