// 1
console.log(hello);
var hello = 'world';
//INTERPRETED:
//var hello;
//console.log(hello);
//hello = 'world';
//OUTPUT:undefined

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//INTERPRETED
// var needle;
// function test(){
// var needle;
// needle = 'magnet';
// console.log(needle);
// }
// needle = 'haystack';
// test();
//OUTPUT:magnet

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//INTERPRETED
// var brendan;
// function print(){
// brendan = 'only okay';
// console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

//OUTPUT:super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//INTERPRETED
// var food;
// function eat(){
// var food;
// food = 'gone';
// food = 'half-chicken';
// console.log(food);
// }
// food = 'chicken';
// console.log(food);
// eat();
//OUTPUT:chicken, half-chicken

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//INTERPRETED
// var mean;
// mean();
// console.log(food);
// mean = function() {
// var food;
// food = "fish";
// food = "chicken";
// console.log(food);
// console.log(food);
// }
// console.log(food);

//OUTPUT:error; mean not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//INTERPRETED
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
// 	console.log(genre);
// 	genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);
//OUTPUT:undefined,rock,r&b,disc

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//INTERPRETED
// function learn() {
// var dojo;
// dojo = "seattle";
// console.log(dojo);
// dojo = "burbank";
// console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
//OUTPUT:san jose,seattle,burbank,san jose
