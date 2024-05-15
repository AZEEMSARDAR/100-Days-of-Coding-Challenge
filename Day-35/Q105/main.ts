// This function simulates rolling a dice and returns a number between 1 and 10
function rollDice(): number {
    return Math.floor(Math.random() * 10) + 1; // Calculates a random integer from 1 to 10
}

console.log(rollDice()); // Outputs a random number between 1 to 10
// Here, we mimic the action of rolling a dice and getting a result.
