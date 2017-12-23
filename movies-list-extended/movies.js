var MovieList = function(){
	'use strict';
	// Defining a new scope

	var movies_list = [
		"Planet Earth II",
		"Band of Brothers",
		"Planet Earth",
		"Game of Thrones",
		"Breaking Bad",
		"The Star"
	], movieIndex, movie, moviesBelt;

	function addToBelt( movie, moviesBelt ){

		var movieName, movieItem;

		movieItem = document.createElement('li');
		movieName = document.createTextNode( movie );

		movieItem.appendChild( movieName );

		moviesBelt.appendChild( movieItem );

	}

	if( movies_list.length ){

		moviesBelt = document.createElement('ul');

		for( movieIndex in movies_list ){
			/* current show */
			movie = movies_list[ movieIndex ];
			addToBelt( movie, moviesBelt );
		}
	}

	document.addEventListener('DOMContentLoaded', function(){
		var body = document.getElementsByTagName('body')[0];

		body.appendChild( moviesBelt );

	});

}();