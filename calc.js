
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hey can I try to do some math for you?\nMake sure you write your problems as QUESTION, #1, then #2\nExample:\n+ 1 1\nGo ahead, ask! Type help if you're unsure.")

let outer = function(){
reader.question("", function(input){


	function rounding(x){
		return Math.round(x / 10) * 10;}

	const tokens = input.split(' ');
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	const rounded = rounding(num1*num2);
	const again = "How about another question? When you're done, type 'goodbye'\nRemember: type 'help' for a list of stuff you can do!";
	const easy = "The answer is definitely probably ";
	const ooh = "Um probably ";
	const uhoh = `Dude I don't know probably like `;
	const cheater = "I just googled it and it's ";
	const toohard = "I have no idea...";
	const smallerdivision = `Lol ${num1} is smaller than ${num2} the answer is `;

	//Help Section

	const addhelp = "'+' will add two numbers together. Example: + 10 2 = 12\n"
	const subhelp = "'-' will subtract two numbers. Example: - 10 2 = 8\n"
	const mulhelp = "'*' will multiply numbers. Example: * 10 2 = 20\n"
	const divhelp = "'/' will divide numbers. Example: / 10 2 = 5\n"
	const bighelp = "'>' will check if a number is greater. Example: > 10 2 = Yes\n"
	const smallhelp = "'<' will check if a number is smaller. Example: < 10 2 = No\n"
	const byehelp = "'goodbye' will let you leave!"

	if (mathSymbol === "help"){
		console.log(addhelp,subhelp,mulhelp,divhelp,bighelp,smallhelp,byehelp)
		return outer()
	}


	if (num1 + num2 > 500){
			console.log(toohard)
			setTimeout(() => {console.log(again); }, 1500)
			return outer()
	}

	if (num1 === 1 && num2 === 1 && mathSymbol === "+"){
		console.log("C'mon that was the example...\nTry again with a harder one maybe?")
		return outer()
	}

	if (num1 + num2 < 500 && num1 + num2 > 2 && mathSymbol === "+"){
		console.log(easy,num1+num2)
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}
	
	if (num1 + num2 < 500 && mathSymbol === "-"){
		console.log(ooh,num1-num2)
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (num1 + num2 < 500 && mathSymbol === "*"){
		console.log(uhoh,rounded)
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (num1 < num2 && mathSymbol === "/"){
		console.log(smallerdivision,0)
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (num1 > num2 && mathSymbol === "/"){
		console.log(cheater,num1/num2)
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
		
	}

	if (mathSymbol === ">" && num1 > num2){
		console.log("Yup.")
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (mathSymbol === ">" && num1 <= num2){
		console.log("Nope.")
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (mathSymbol === "<" && num1 < num2){
		console.log("Yup.")
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (mathSymbol === "<" && num1 >= num2){
		console.log("Nope.")
		setTimeout(() => {console.log(again); }, 1500)
		return outer()
	}

	if (mathSymbol === "goodbye"){
		console.log("Are you sure you want to leave? Say yes")
		return outer()
	}

	if (mathSymbol === "yes"){
		console.log("Are you positive? Say positive")
		return outer()
	}

	if (mathSymbol === "positive"){
		console.log("Okay... It's fine. I'm not mad")
		setTimeout(() => { console.log("I guess I'll see you around.."); }, 2000);
		reader.close()
	}

	else {
		console.log("You're doing it wrong.. Type 'help' again please")
		return outer()
	}


	
}
)
};
outer();