class Computer{
    constructor(name, health){
        this.name = name;
        this.healt = health;
    }
    generateAttackDamage(){
        return getRandomInt(1, 5)
    }
}

class Character extends to Computer {
    constructor(name, health, healsRemaining){
        super(name, health);
        this.healsRemaining = healsRemaining;
        this.wins = 0;
    }
    generateAttackDamage(){
        return getRandomInt( 1, 3);
    }
    heal(){
        this.health += getRandomInt(1,10);
        this.healsRemaining--;
    }




}


startGame();
function StartCombat(username){
    var grant = new Computer('Grant', 10);
    var user = new Character(username, 40, 2);

    while (user.wins < 3 && user.health > 0){

    }


}