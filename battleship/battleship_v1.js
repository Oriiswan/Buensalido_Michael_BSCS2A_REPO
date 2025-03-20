'use strict';
console.log('Battleship Game');

//Declaring Variables
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = Number(prompt('Ready!, Aim, Fire! (Enter Number from 0 to 6)🧨'));
    if (guess < 0 || guess > 6) {
        alert('Please input valid number')
    }
     else {
        guesses = guesses + 1;
        if (guess === location1 || guess === location2 || guess === location3) {
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

var stats = "You sank my battleship at: " + guesses + 'guesses ' + "and your accuracy is: " + (3/guesses * 100);
alert(stats);