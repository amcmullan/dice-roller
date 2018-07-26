/*concept: define two test combatants. a function for dice, any qauntity or size. a function that combines the statistics of the combatants with the dice to determine damage.*/

/*define the statistics of two champions, er they step into the arena, lo only one shall step out.*/


const beefy = {
name : "Mr. awesome",
hp : 12,
ac : 16,
prof : 2,
dambonus : 1,
damdice : 6,
attacks: 1};

const deathAdder = {
name : "the evil one",
hp : 10,
ac : 14,
prof : 4,
dambonus : 2,
damdice : 8,
attacks : 1};
const attacker = beefy;
const enemy = deathAdder;
/*simulate the rolling of dice for their heroic and/or dastardly engagement
failed attempt
 function roll(s, q) {
let result = [];

for (i = 0; i < q; i++) {
          result.push(Math.floor(Math.random() * s) + 1)
        }
		console.log(parseInt(result));
		return result;
		
} 
*/
let sum = 0;
function diceRoller(s, q) {
      /*we define the following variables inside the function so they won't carry over to the next use.*/

      const dice = [];
      //const size = document.getElementById("size").value;
      //const quant = document.getElementById("quant").value;
        for (i = 0; i < q; i++) {
          dice.push(Math.floor(Math.random() * s) + 1)
        }
        console.log(dice.toString()); 
        sum = dice.reduce(function(a, b) {
          return a + b;
        }, 0);
      console.log(sum) ;
document.getElementById("combatLog").innerHTML += ` You roll ${q+"d"+s}... the dice stop on.... <br>`  ;
dice.map(function(item) {
          return document.getElementById("combatLog").innerHTML += `<b> ${item}</b>... <br>`;
      }) 
	  return sum;
}
function test() {
	diceRoller(20, 1);
	console.log(sum);
}
let round = 0;
function report() {
	document.getElementById("combatLog").innerHTML += `${enemy.name} has ${enemy.hp} hitpoints remaining... and ${attacker.name} has ${attacker.hp}.<br>`;
	round++
	document.getElementById("combatLog").innerHTML += `Round ${round}!`;
}

function attack() {
	console.log("prof"+attacker.prof);
	console.log("attacks"+attacker.attacks);
	
	let ahitroll = diceRoller(20, attacker.attacks) + attacker.prof;
	let adamroll = diceRoller(attacker.damdice, attacker.attacks) + attacker.dambonus;
	console.log(adamroll);
	console.log(ahitroll);
	if (ahitroll >= enemy.ac) {
		enemy.hp =- adamroll;
		document.getElementById("combatLog").innerHTML += `You hit ${enemy.name} very hard! (${adamroll} damage!)`;
		if (enemy.hp < 1){
			document.getElementById("combatLog").innerHTML += `${enemy.name} crumbles to the ground, DEAD.`;
			return;
		}
	} else {
		document.getElementById("combatLog").innerHTML += `You miss ${enemy.name}, who cackles madly`;
	}
	document.getElementById("combatLog").innerHTML += `${enemy.name} attacks you!`;
	let ehitroll = diceRoller(20, enemy.attacks) + enemy.prof;
	let edamroll = diceRoller(enemy.damdice, enemy.attacks) + enemy.dambonus;
	if (ehitroll >= attacker.ac) {
		attacker.hp =- edamroll;
		document.getElementById("combatLog").innerHTML += `${enemy.name} gives you a terrific slash! (-${edamroll})`;
		if (attacker.hp < 1) {
			document.getElementById("combatLog").innerHTML += `You fall to the ground DEAD!`;
			return;
		}
	} else {
		document.getElementById("combatLog").innerHTML += `${enemy.name} misses you as you dodge nimbly aside!`;
	}
	return report();
}
/*define the function that will simulate an attack, we make attacker and defender preset variables for now, at some point they will be defined by input from the HTML, at the moment the logic seems a little broken. need to shift damrolls after the AC check. also, at the moment any hit seems to be a kill, which is clearly broken. HP is not being collected correctly.*/

