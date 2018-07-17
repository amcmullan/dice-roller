
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

// let's rewrite it so it will allow bonuses added after the roll, also let's allow user to roll any number of dice.
rl.question("what size dice would you like to roll? (i.e. 1dx) ", (answerSize) => {
	if (answerSize > 0) {
		var size = answerSize;
		rl.question("...and how many should we roll? ", (answerQuant) => {
			var quantity = answerQuant;
			rl.question("Great, what bonus do you want added to the end? ", (answerBonus) => {
				var bonus = answerBonus;
				var dice = [];
				for (i = 0;i < quantity;i++) {
					dice.push(Math.floor(Math.random() * size + 1)) ; /*expected order of operation: random decimal * num -> +1 -> rounded strictly down = random number between size and 1 */
				}
				const sum = dice.reduce(function (a, b) {return a+b;}, 0); /* I understand .reduce() takes the contents of an array and reduces them to a single number, but I don't understand the function, there is no sum(), so we use this. the function basically just takes the two arguments (a, b) and adds them together, one must be a sum of previous additions or it wouldn't work. don't know how .reduce() knows how to parse the array though... 
				
				TO-DO: further study on .reduce()*/
				console.log("you rolled ", dice, " plus... ", bonus, " for a total of: ", (parseInt(sum) + parseInt(bonus)));
				rl.close();
	
			})
		})
		

	} else {
		console.log("the result is zero or less... are you trying to break me?");
		rl.close();
	}
});
