var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

// hello world
// bar



// var ninja = 'Libby';
// setTimeout( function (){ console.log(ninja); }, 2000 ); // run the function defined after 2000 milliseconds
// console.log(ninja);




// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");


// var a = 2;
// var b = function() { console.log("something"); };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);


function Ninja(name) {

    this.name = name;
    var speed = 3;
    var strength = 3;
    this.health = 100;

    this.showStats = function(){
      console.log( 'Name: ' + this.name+'\n'
            +'Strength: '+ strength+'\n'
            +'Speed: '+ speed +'\n'
            +'Health: '+ this.health);
      return this;
    }

  }

  Ninja.prototype.sayName = function(){
    console.log('My name is: ' + this.name);
    return this;
  }

  Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
  }


const ninja1 = new Ninja('Catboy');
ninja1.sayName();
ninja1.showStats();
