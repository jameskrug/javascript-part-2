function Warrior(name, gender, level, weapon, power, warriorNum){
    this.name = name,
    this.gender = gender,
    this.level = level,
    this.weapon = weapon,
    this.power = power,
    this.warriorNum = warriorNum

}
Warrior.prototype.alive = true;
Warrior.prototype.fight = function(){
    if (this.gender == 'm'){    
        console.log(this.name + " rushes to the arena with his " + this.weapon);
    }
    else{
        console.log(this.name + " rushes to the arena with her " + this.weapon);
    }
}
Warrior.prototype.faceoff = function fighting(){
    var sameNum = true;
    var x = this.warriorNum;
    var y = 0;
    while (sameNum){
        y = Math.floor((Math.random()*5) + 1);
        if (x != (y+1)){
            sameNum = false;
        }
        if (allWarrios[y].alive == false){
            sameNum = true;
        }
    }
    var opponent = allWarrios[y].name;

    console.log(this.name + " attacks " + opponent);
    if (this.power > allWarrios[y].power){
        console.log(this.name + " Wins! " + allWarrios[y].name + " is dead on the floor!");
        allWarrios[y].alive = false;
    }
    else{
        console.log(allWarrios[y].name + " Wins! " + this.name + " is dead on the floor!");
        this.alive = false;
    }
}

var allWarrios = [];
var joe = new Warrior("Joe", "m", 3, "axe", 32, 1);
var xena = new Warrior("Xena", "f", 6, "circular throwing thing", 77, 2);
var tim = new Warrior("Tim", "m", 1, "stick", 11, 3);
var harold = new Warrior("Harold", "m", 3, "pointy stick", 26, 4);
var svetlana = new Warrior("Svetlana", "f", 3, "bow", 32, 5);
var yasmin = new Warrior("Yasmin", "f", 1, "knives", 20, 6);

allWarrios.push(joe);
allWarrios.push(xena);
allWarrios.push(tim);
allWarrios.push(harold);
allWarrios.push(svetlana);
allWarrios.push(yasmin);

joe.fight();
xena.fight();
tim.fight();
harold.fight();
svetlana.fight();
yasmin.fight();

var thereCanBeOnlyOne = true
var peopleLeft = allWarrios.length
console.log(allWarrios.length)
if (thereCanBeOnlyOne){
    if (joe.alive){
        joe.faceoff();
    }
    else{
        peopleLeft--;
    }
    if (xena.alive){
        xena.faceoff();
    }
    else{
        peopleLeft--;
    }
    if (tim.alive){
        tim.faceoff();
    }
    else{
        peopleLeft--;
    }
    if (harold.alive){
        harold.faceoff();
    }
    else{
        peopleLeft--;
    }
    if (svetlana.alive){
        svetlana.faceoff();
    }
    else{
        peopleLeft--;
    }
    if (yasmin.alive){
        yasmin.faceoff();
    }
    else{
        peopleLeft--;
    }
    if (peopleLeft <= 1){
        thereCanBeOnlyOne = false;
    }
}


