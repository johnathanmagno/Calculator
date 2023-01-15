
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let outer = function(){
reader.question("Hey can I try to do some math for you?", function(input){

	function rounding(x){
		return Math.round(x / 10) * 10;}

	const tokens = input.split(' ');
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	const rounded = rounding(num1*num2);

	const easy = "The answer is definitely probably ";
	const ooh = "Um probably ";
	const uhoh = `Dude I don't know probably like ${rounded}, who knows.`;
	const cheater = "I just googled it and it's ";
	const toohard = "I have no idea... Can't you ask an easier question?";
	const smallerdivision = `Lol ${num1} is smaller than ${num2} that won't work`;

	if (num1 + num2 > 500){
			console.log(toohard)
			return outer()
	}

	if (num1 + num2 < 500 && mathSymbol === "+"){
		console.log(easy,num1+num2)
		return outer()
	}
	
	if (num1 + num2 < 500 && mathSymbol === "-"){
		console.log(ooh,num1-num2)
		return outer()
	}

	if (num1 + num2 < 500 && mathSymbol === "*"){
		console.log(uhoh)
		return outer()
	}

	if (num1 < num2 && mathSymbol === "/"){
		console.log(smallerdivision)
		return outer()
	}

	if (num1 > num2 && mathSymbol === "/"){
		console.log(cheater,num1/num2)
		return outer()
		
	}

	if (mathSymbol === "exit"){
		reader.close();
	}

	
	
}
)
}

outer();