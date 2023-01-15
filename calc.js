
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Adjusted from chatting with Nathan - had to look up some videos but think I understand what's happening here now. Defined outer as a function, then have every question recursively referencing outer to restart the application instead of it just closing after.
console.log("Hey can I try to do some math for you?\nMake sure you write your problems as QUESTION, #1, then #2\nExample:\n+ 1 1\nGo ahead, ask! Type help if you're unsure.")
let outer = function(){
reader.question("", function(input){

//I wanted the calculator to be dumb, so I made it round to the nearest 10 for larger problems
	function rounding(x){
		return Math.round(x / 10) * 10;}

//Added some flavor text for reference. There's probably a better way to do this but I'm not sure
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

//Added a help feature to show the types of operators the calculator could use
	if (mathSymbol === "help"){
		console.log(addhelp,subhelp,mulhelp,divhelp,bighelp,smallhelp,byehelp)
		return outer()
	}

//In line with previous comment wanting to make the calculator dumb
	if (num1 + num2 > 500){
			console.log(toohard)
			setTimeout(() => {console.log(again); }, 1500)
			return outer()
	}

	//All of this is math related
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

	//A way to close the application so it doesn't run forever
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

	//Before it would break if you typed "5 + 4" instead of "+ 5 4", needed a way for it to reset if someone did an improper input
	else {
		console.log("You're doing it wrong.. Type 'help' again please")
		return outer()
	}


	
}
)
};
//Defining function. I'm not going to pretend I understand why this needs to be down here when I have the returns, but it didn't work until I tried this
outer();
