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

*/
let sum = 0;
function diceRoller(s, q, b) {
      /*we define the following variables inside the function so they won't carry over to the next use.*/

      const dice = [];
 
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
	  if (b > 0) {
          document.getElementById("combatLog").innerHTML += `<br>with a bonus of ${b}`;
        }
		document.getElementById("combatLog").innerHTML += `<br>for a total of ${parseInt(sum) + parseInt(b)} <br>`;
	  return sum;
}
function test() {
	document.getElementById("combatLog").innerHTML += `enemy ac is ${enemy.ac} enemy hp is ${enemy.hp}`;
}
let round = 1;
/*
A function controlling what the enemies do. to be called by the end of round function. Currently just attacks.
*/
function enemyActions() {
	document.getElementById("combatLog").innerHTML += `${enemy.name} attacks you!<br>`;
	let ehitroll = diceRoller(20, enemy.attacks, enemy.prof) + enemy.prof;
	
	if (ehitroll >= attacker.ac) {
		let edamroll = diceRoller(enemy.damdice, enemy.attacks, enemy.dambonus) + enemy.dambonus;
		attacker.hp -= edamroll;
		document.getElementById("combatLog").innerHTML += `${enemy.name} gives you a terrific slash! (${edamroll} damage!)<br>`;
		if (attacker.hp < 1) {
			document.getElementById("combatLog").innerHTML += `You fall to the ground DEAD!<br>`;
			return;
		}
	} else {
		document.getElementById("combatLog").innerHTML += `${enemy.name} misses you as you dodge nimbly aside!<br>`;
	}
}
/*
clean up after the user attacks, call the enemy attacks as per the (to be created) enemy list.
*/
function endRound() {
	enemyActions();
	document.getElementById("combatLog").innerHTML += `<br> end of round ${round}<br>${enemy.name} has ${enemy.hp} hitpoints remaining... and ${attacker.name} has ${attacker.hp}.<br>`;
	round++;
	document.getElementById("combatLog").innerHTML += `Round ${round}!<br>`;
	if (document.getElementById("attButton").disabled = true) {
		document.getElementById("attButton").disabled = false; 
	} 
}

function attack() {
	console.log("prof"+attacker.prof);
	console.log("attacks"+attacker.attacks);
	
	let ahitroll = diceRoller(20, attacker.attacks, attacker.prof) + attacker.prof;
	
	console.log(ahitroll);
	
	if (ahitroll >= enemy.ac) {
		let adamroll = diceRoller(attacker.damdice, attacker.attacks, attacker.dambonus) + attacker.dambonus;
		console.log(adamroll);
		enemy.hp -= adamroll;
		document.getElementById("combatLog").innerHTML += `You hit ${enemy.name} very hard! (${adamroll} damage!)`;
		if (enemy.hp < 1){
			document.getElementById("combatLog").innerHTML += `${enemy.name} crumbles to the ground, DEAD.`;
			return document.getElementById("attButton").disabled = true;
		}
	} else {
		document.getElementById("combatLog").innerHTML += `You miss ${enemy.name}, who cackles madly`;
	}
	
	return document.getElementById("attButton").disabled = true;
}
/*define the function that will simulate an attack, we make attacker and defender preset variables for now, at some point they will be defined by input from the HTML, at the moment the logic seems a little broken.*/

