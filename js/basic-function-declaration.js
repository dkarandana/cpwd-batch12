var name = "Dhananjaya",
	cpwd = "CPWD",
	iD, DOMEle;

	DOMEle = document.getElementsByTagName('h1');


function welcome( firstName ){
	var greetings = "Hello " + firstName;

	// console.log( arguments );

	return greetings;
}

var person1 = welcome("Dhananjaya");

console.log( person1 ); // Hello Dhananjaya
