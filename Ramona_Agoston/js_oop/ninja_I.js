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
const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
