let coinFlip;
let randomNum = Math.round(Math.random());
coinFlip = randomNum;
let choice = prompt('Heads or Tails?');
if (coinFlip <= 4) {
    if (choice === 'Heads' || choice === 'heads') {
        alert('The flip was heads and you chose heads... you win!');
    } else if (choice === "Tails"  || choice === "tails") {
        alert('The flip was heads and you chose tails... you lose!');
    }  else {
        alert('The flip was heads and you didn\'t choose neither... you lose!');
    }
} else {
    if (choice === 'Heads' || choice === 'heads') {
        alert('The flip was tails and you chose heads... you lose!');
    } else if (choice === 'Tails'  || choice === 'tails') {
        alert('The flip was tails and you chose tails... you win!')
    } else {
        alert('The flip was tails and you didn\'t choose neither... you lose!');
    }
}
// I added the options of 'Heads'/'heads' and 'Tails'/'tails'
// in case users type capital/lowercase
// Also added the error message in case user didn't type neither choices

console.log(coinFlip);
console.log(randomNum);
// I added console.log to check what's the random number is
// because everytime the flip is heads...
// It seems that I only get 0 or 1... 
