function bark(weight, name) {
    weight > 20 ?  console.log(name + ' says WOOF WOOF') : console.log(name + ' says woof woof');
}

var dogName = 'rover';
var dogWeight = 15;
barking(dogWeight, dogName);


var dogName = 'Brownie';
var dogWeight = 10;
barking(dogWeight, dogName);

var dogName = 'Whity';
var dogWeight = 23;
barking(dogWeight, dogName);

var dogName = 'Blacky';
var dogWeight = 28;
barking(dogWeight, dogName);