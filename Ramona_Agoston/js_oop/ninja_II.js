function Ninja(name) {
    this.name = name;
    var speed = 3;
    var strength = 3;
    this.health = 100;
    this.showStats = function(){
        console.log( 'Name:' + this.name +' Strength:'+ strength +' Speed:'+ speed +' Health:'+ this.health);
        return this;
    }
}
Ninja.prototype.sayName = function(){
    console.log('My ninja name is: ' + this.name);
    return this;
}
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
}
Ninja.prototype.punch = function(ninja){
    ninja.health -=5;
    console.log(ninja.name + ' was punched by '+ this.name+ ' and lost 5 health')
    return this;
}
Ninja.prototype.kick = function(ninja){
    var strength = this.strength;
    var loss = 3*strength;
    ninja.health -=loss;
    console.log(ninja.name + ' was kicked by '+ this.name+ ' and lost '+ loss +' health');
    return this;
}
const blueNinja = new Ninja('Goemon');
const redNinja = new Ninja('Bill Gates');
blueNinja.punch(redNinja);
redNinja.kick(blueNinja);
console.log();
blueNinja.showStats();
console.log();
redNinja.showStats();
