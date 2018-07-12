class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        return console.log(`My name is ${this.name}`);
    }
    showStats(){
        return console.log(`Name:${this.name},Health:${this.health},Speed:${this.speed},Strenght:${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.name = name;
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
  }
    speakwisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showStats(){
    return console.log(`Name:${this.name},Health:${this.health},Speed:${this.speed},Strength:${this.strength},Wisdom:${this.wisdom}`);
    }
}
const superSensei = new Sensei('Master Splinter');
superSensei.sayName();
superSensei.speakwisdom();
superSensei.showStats();
