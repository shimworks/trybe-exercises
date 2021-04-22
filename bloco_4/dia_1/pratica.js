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