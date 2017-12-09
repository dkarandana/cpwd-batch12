var Person = {
		name:"Jack",
		email:"jackma@alibaba.com",
		networth:38.3,
		grade:"PASS"
	};


	for(var prop in Person ){
		console.log( prop,": ", Person[ prop] );
	}

	if( Person.hasOwnProperty("grade") ){
		console.log( Person.grade );
	}


	