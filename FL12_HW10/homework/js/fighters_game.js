const Fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
const Fighter2 = new Fighter({ name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 100 });

let crit = 101;
let hundred = 100;

function Fighter(properties) {
    let name = properties.name;
    let damage = properties.damage;
    let strength = properties.strength;
    let agility = properties.agility;
    let hp = properties.hp;
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

    this.attack = function (defender) {
        let attackChance = hundred - (defender.getStrength() + defender.getAgility());
        let critChance = Math.floor(Math.random() * crit);
        if (attackChance > critChance) {
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            defender.dealDamage(this.getDamage());
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    this.logCombatHistory = function () {
        return `Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`;
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

Fighter1.attack(Fighter2);
console.log(Fighter2.getAgility());
console.log(Fighter1.getName());

