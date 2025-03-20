'use strict';
console.log('Battleship Game');
var randomLoc = Math.floor(Math.random() * 5);
//Declaring Variables
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = prompt('Ready!, Aim, Fire! (Enter Number from 0 to 6)🧨');
    if (guess == null) {
        alert('Thankyou for playing')
        console.log(guess)
        break;
    }
    if (guess < 0 || guess > 6) {
        alert('Please input valid number')
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hit!')
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert('You Sank all the ship😡💢!!!')
            }
        } else {
            alert('Miss!')
        }
        
    }
    
}
var accuracy = (guesses > 0 ? hits / guesses * 100 : 0).toFixed(2)
var stats = "You sank my battleship at: " + guesses + 'guesses ' + "and your accuracy is: " + accuracy + '%';
alert(stats);