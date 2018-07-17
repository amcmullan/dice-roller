
//allow user input, using readline apparently. because this is node.js.
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
//create a function to randomize a number between 1 and input
function randomDice(num) {
	const dice = Math.floor(Math.random() * num + 1); 
	return;
	
}

/* ask the user what size dice they want to roll, check if it is zero or less, to avoid confusing answers. then return the result and close. */
rl.question("What is the maximum of the dice you would like to roll? ", (answer) => {
	if (answer > 0) {
		var dice = Math.floor(Math.random() * answer + 1);
	console.log("you rolled a... ", dice);

rl.close();
	} else {
		console.log("the result is zero or less... are you trying to break me?");
		rl.close();
	}
});
