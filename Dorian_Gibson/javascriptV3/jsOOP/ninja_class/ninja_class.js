function Ninja(name){
  var strength = 3;
  var speed = 3;
  this.name = name;
  this.health = 100;

  this.sayName = function(){
    console.log(this.name);
  }

  function readStrength(){
    return strength;
  }

  function readSpeed(){
    return speed;
  }

  this.showStats = function(){
    var x = readStrength();
    var y = readSpeed();
    console.log('Name: '+this.name+', Health: '+this.health+' Speed: '+y+', Strength: '+x);
  }

  this.drinkSake = function(){
    this.health += 10;
    console.log('Gained 10 Health! '+this.health);
  }

  this.punch = function(x){
    if (x instanceof Ninja){
      return null
    }
    x.health -= 5;
    console.log(x.name+' was punched by '+this.name+' and lost 5 Health');
  }

  this.kick = function(x){
    if (x instanceof Ninja){
      return null
    }
    var z = readStrength();
    var points = z * 15
    x.health -= 15;
    console.log(x.name+' was punched by '+this.name+' and lost '+points+' Health');
  }
}

var ninja1 = new Ninja('Hyabusa');
var ninja2 = new Ninja('Bill Gates')
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja2.punch(ninja1);
ninja1.kick(ninja2);
ninja2.showStats();
