import { Car, Color, Doors, Side } from "./exercise"

let gol = new Car("volkswagen", Color.Silver, 4)

gol.openTheDoor(Doors.One);
gol.closeTheDoor(Doors.One);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Side.Left);
gol.speedUp();
gol.speedDown();
gol.turn(Side.Right);
gol.speedUp();
gol.speedDown();
gol.turn(Side.Right);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.Four)
gol.closeTheDoor(Doors.Four);
gol.speedUp();
gol.speedDown();
gol.turn(Side.Right);
gol.speedUp();
gol.speedDown();
gol.turn(Side.Left);
gol.speedUp();
gol.speedDown();
gol.turn(Side.Right);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.Four);
gol.closeTheDoor(Doors.Four);
gol.speedUp();


