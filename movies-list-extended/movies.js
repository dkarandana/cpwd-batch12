var MovieList = function(){
	'use strict';
	// Defining a new scope

	var movies_list = [
	  {
	    name:"Planet Earth II",
	    IMDB:9.5,
	    year:2016,
	    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
	  },
	  {
	    name:"Band of Brothers",
	    IMDB:9.5,
	    year:2001,
	    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX182_CR0,0,182,268_AL_.jpg"
	  },
	  {
	    name:"Planet Earth",
	    IMDB:9.4,
	    year:2006,
	    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
	  },
	  {
	    name:"Game of Thrones",
	    IMDB:9.4,
	    year:2011,
	    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
	  },
	  {
	    name:"Breaking Bad",
	    IMDB:9.4,
	    year:2008,
	    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg"
	  },
	  {
	    IMDB:4.9,
	    year:2017,
	    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MDQ4NTM2N15BMl5BanBnXkFtZTgwNDM1NTIzMzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
	  }
	], movieBelt;

	/* This function will add movie items into list */

	if( movies_list.length > 0 ){
		movieBelt = document.createElement('ul');
	}

	function addToList( movie, index ){
		var movieItem;

		movie.DOM = {};

		movieItem = document.createElement('li');

	/* ===== Movie Name */

		movie.name = ( movie.hasOwnProperty("name") ) ? movie.name : "__Undefined Movie__";

		// Title H3 Element
		movie.DOM.h3 = document.createElement('h3');

		// Name Text Node
		movie.DOM.h3Text = document.createTextNode( movie.name );
		movie.DOM.h3.appendChild( movie.DOM.h3Text );
		// append movie name into movie Item
		movieItem.appendChild( movie.DOM.h3 );

	/* ===== Movie Thumb */	

	if( movie.hasOwnProperty("thumb") ){

		movie.DOM.thumb = document.createElement('img');
	
		var attribs = {
			src: movie.thumb,
			alt: movie.name + ' thumb'
		};

		/* Setting up image attributes */
		for( var attr in attribs ){
			movie.DOM.thumb.setAttribute( attr , attribs[ attr ] );
		}

		movieItem.appendChild( movie.DOM.thumb );
	}


	/* Appending new movie item in to UL element */	
		movieBelt.appendChild( movieItem );

		console.log( movie );
	}

	movies_list.forEach( function( movie, index ){
		addToList( movie, index );
	});

	/* DOM Ready */
	document.addEventListener('DOMContentLoaded', function(){
		var movieList;

		movieList = document.getElementById('movie-list');

		// Append newly created list
		movieList.appendChild( movieBelt );
	});


}();