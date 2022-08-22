"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex = __importStar(require("./exercises"));
console.log(ex.greeter('Maria'));
console.log(ex.personAge('Maria', 40));
console.log(`A soma do array é igual a ${ex.sumArray([3, 6, 9])}`);
console.log(`Triangulo de base 10cm e altura 25cm: ${ex.triangle(10, 25)}cm2`);
console.log(`Triangulo de base 5cm e altura 30cm: ${ex.triangle(5, 30)}cm2`);
console.log(`Triangulo de base 100cm e altura 200cm: ${ex.triangle(100, 200)}cm2`);
console.log(`Quadrado de lado 10cm ${ex.square(10)}cm2`);
console.log(`Quadrado de lado 5cm ${ex.square(5)}cm2`);
console.log(`Quadrado de lado 100cm ${ex.square(100)}cm2`);
console.log(`Retângulo de base 10cm e altura 25cm: ${ex.rectangle(10, 25)}cm2`);
console.log(`Retângulo de base 5cm e altura 30cm: ${ex.rectangle(5, 30)}cm2`);
console.log(`Retângulo de base 100cm e altura 200cm: ${ex.rectangle(100, 200)}cm2`);
