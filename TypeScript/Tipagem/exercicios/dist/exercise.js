"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Side = exports.Doors = exports.Color = exports.Car = void 0;
var Color;
(function (Color) {
    Color["Black"] = "Preta";
    Color["White"] = "Branca";
    Color["Red"] = "Vermelha";
    Color["Silver"] = "Prata";
})(Color || (Color = {}));
exports.Color = Color;
var Doors;
(function (Doors) {
    Doors["One"] = "Um";
    Doors["Two"] = "Dois";
    Doors["Tree"] = "Tres";
    Doors["Four"] = "Quatro";
})(Doors || (Doors = {}));
exports.Doors = Doors;
var Side;
(function (Side) {
    Side["Right"] = "Direita";
    Side["Left"] = "Esquerda";
})(Side || (Side = {}));
exports.Side = Side;
function echo(param) {
    return console.log(param);
}
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log("Honk!");
    }
    openTheDoor(door) {
        console.log(`Abriu a porta ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechou a porta ${door}`);
    }
    turnOn() {
        console.log("O carro ligou");
    }
    turnOff() {
        console.log("O carro desligou");
    }
    speedUp() {
        console.log("O carro acelerou");
    }
    speedDown() {
        console.log("O carro desacelerou");
    }
    stop() {
        console.log("O carro parou");
    }
    turn(turn) {
        console.log(`O carro virou para a ${turn}`);
    }
}
exports.Car = Car;
