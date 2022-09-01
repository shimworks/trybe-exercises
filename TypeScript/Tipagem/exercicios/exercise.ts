enum Color {
  Black = "Preta",
  White = "Branca",
  Red = "Vermelha",
  Silver = "Prata"
}
enum Doors {
  One = 'Um',
  Two = 'Dois',
  Tree = 'Tres',
  Four = 'Quatro'
}
enum Side {
  Right = "Direita",
  Left = "Esquerda"
}

function echo<T>(param: T): void {
  return console.log(param)
}

interface CarInfo {
  brand: string;
  color: Color;
  doors: number;
}

class Car implements CarInfo {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number){
    this.brand = brand;
    this.color = color;
    this.doors = doors
  }
  honk(): void {
    console.log("Honk!")
  }
  openTheDoor(door: Doors): void {
    console.log(`Abriu a porta ${door}`)
  }
  closeTheDoor(door: Doors): void {
    console.log(`Fechou a porta ${door}`)
  }
  turnOn(): void{
    console.log("O carro ligou");
  }
  turnOff(): void{
    console.log("O carro desligou");
  }
  speedUp(): void{
    console.log("O carro acelerou");
  }
  speedDown(): void{
    console.log("O carro desacelerou");
  }
  stop(): void{
    console.log("O carro parou");
  }
  turn(turn: Side): void{
    console.log(`O carro virou para a ${turn}`);
  }
}

export {
  Car,
  Color,
  Doors,
  Side
}