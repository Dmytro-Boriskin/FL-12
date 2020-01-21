const Fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
const Fighter2 = new Fighter({ name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 100 });

let crit = 101;
let hundred = 100;

function Fighter(obj) {
    let name = obj.name;
    let damage = obj.damage;
    let strength = obj.strength;
    let agility = obj.agility;
    let hp = obj.hp;
    let wins = 0;
    let losses = 0;

    this.getName = function () {
        return name;
    }
    this.getDamage = function () {
        return damage;
    }
    this.getHealth = function () {
        return hp;
    }
    this.getStrength = function () {
        return strength;
    }
    this.getAgility = function () {
        return agility;
    }
    this.attack = function (fighter) {
        let attackChance = hundred - (fighter.getStrength() + fighter.getAgility());
        let critChance = Math.floor(Math.random() * crit);
        if (attackChance > critChance) {
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
            fighter.dealDamage(this.getDamage());
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    this.logCombatHistory = function () {
        return console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    }
    this.heal = function (healthPoints) {
        if (hp + healthPoints > hundred) {
            hp = hundred;
        } else {
            hp += healthPoints;
        }
    }
    this.dealDamage = function (healthPoints) {
        if (hp - healthPoints > 0) {
            hp -= healthPoints;
        } else {
            hp = 0;
        }
    }
    this.addWin = function () {
        wins++;
    }
    this.addLoss = function () {
        losses++;
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
        return;
    }
    if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
        return;
    }

    while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {

        fighter1.attack(fighter2);

        if (fighter1.getHealth() === 0) {
            console.log(`${fighter2.getName()} has won!`);
            fighter1.addLoss();
            fighter2.addWin();
            console.log(fighter1.logCombatHistory());
            console.log(fighter2.logCombatHistory());
            return;
        }

        fighter2.attack(fighter1);

        if (fighter2.getHealth() === 0) {
            console.log(`${fighter1.getName()} has won!`);
            fighter2.addLoss();
            fighter1.addWin();
            console.log(fighter1.logCombatHistory());
            console.log(fighter2.logCombatHistory());
            return;
        }
    }
}
battle(Fighter1, Fighter2);




