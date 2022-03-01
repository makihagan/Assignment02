let readyToPlay = prompt('Are you ready to play? (yes or no)');
if (readyToPlay === 'yes') {
    alert('You are in a dar, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
    let headTo = prompt('Which direction would you like to head (please enter forward, left, or right).');
    switch (headTo) {
        case 'left':
            alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case 'forward':
            alert('You walk 100 yards and safely make your way out of the cave.');
            break;
        case 'right':
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
            break;
        default:
            alert('You entered an invalid answer. Refresh the browser and start over');
    }
} else {
    alert('Thank you for visiting! Play again sometime!')
}