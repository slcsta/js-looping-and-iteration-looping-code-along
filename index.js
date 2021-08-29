// Code your solutions in this file

// Build a function writeCards() that accepts 2 arguments:
// 1. array of string names and 2. event name
// Create a for loop with a counter that starts at 0 and increments at the end of each loop
// Condition should stop the loop after the last name in the array is printed out in the loop body

const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
const event = 'surprise';

function writeCards(names, event) {
    let cards =[];
    for (let i = 0; i < names.length; i++){
        cards[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}


// Write a function called countDown
// countDown takes in an argument of any positive integer
// starting from that positive integer it will count down to zero using console.log()

// let countDown = (any positive integer)

let count = 10;

function countDown(count){
while (count >= 0) {
    console.log(count--);
}
}

