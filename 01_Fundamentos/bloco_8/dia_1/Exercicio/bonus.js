const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};

const battleMembers = { mage, warrior, dragon };

// 01
const dragonDmg = () => 15 + Math.round(Math.random()*(dragon.strength - 15));
// console.log(dragonDmg());

// 02
const warriorDmg = () => warrior.strength + Math.round(Math.random()*(warrior.strength * (warrior.weaponDmg - 1)));
// console.log(warriorDmg());

// 03
const mageDmg = {
      mageRoundDmg: () => mage.mana < 15 ? 'Não possui mana suficiente' : Math.round(mage.intelligence * (1 + Math.random())),
      mageRoundManaCost: () => mage.mana > 15 ? mage.mana - 15 : mage.mana,
  };
// console.log(mageDmg().mageRoundDmg());

// Parte II
const gameActions = { 
    warriorRound: (warriorDmg) => {
    const dmg = warriorDmg();
    warrior.damage += dmg;
    dragon.healthPoints -= dmg;
  }, 
    mageRound: (mageDmg) => {
    const dmg = mageDmg;
    if (mage.mana < 15) {
    return 'Não possui mana suficiente'
  } else {
    mage.mana -= 15
    mage.damage += dmg.mageRoundDmg();
    dragon.healthPoints -= dmg.mageRoundDmg();
  }
  },
    dragonRound: (dragonDmg) => {
    const dmg = dragonDmg();
    dragon.damage += dmg;
    warrior.healthPoints -= dmg;
    mage.healthPoints -= dmg;
  },
  turn: () => battleMembers,
};

gameActions.warriorRound(warriorDmg);
gameActions.mageRound(mageDmg);
gameActions.dragonRound(dragonDmg);
console.log(gameActions.turn());

