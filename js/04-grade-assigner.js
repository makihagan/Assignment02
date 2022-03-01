let yourScore = parseInt(prompt('What is your score? (1 to 100)'));
if (yourScore >= 60 && yourScore < 70) {
    console.log('You received a D');
} else if (yourScore >= 70 && yourScore < 80) {
    console.log('You received a C');
} else if (yourScore >= 80 && yourScore < 90) {
    console.log('You received a B');
} else if (yourScore >= 90 && yourScore <= 100) {
    console.log('You received an A');
} else if (yourScore >= 1 && yourScore < 60) {
    console.log('You received an F');
} else {
    alert('You entered invalid character');
}