var Person = {
		name:"Paul Newman",
		grade:null,
		null:"NUll",
		"":true,
		1:"Numeric",
		undefined:undefined
	};

	Person.watches = ["Rolex daytona"];

	// Person.1 will not work, Numeric indexes are unable to access by using dot notations

	console.log( "Person", Person );

	console.log( Person[1] ); // Numeric

/* Accessing Object keys */
	var keys = Object.keys( Person );

	console.log( "Keys", Object.keys( Person ) );
	