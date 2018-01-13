/*
	jQuery no conflict
	https://api.jquery.com/jquery.noconflict/

	var jQ = $.noConflict();

	console.log("jQuery", jQuery );
	console.log("$ new Alias", jQ );
*/

// Event Handler

/*
var handler = function(){
	var $body = $('body');


	$body.css('color', 'red');

	console.log( $body );

};

$( document ).ready( handler );
*/

$(document).ready(function(){});

$(function(){
	// DOM is ready to Manipulate

	var $body = $('body');

	/*$body.css({
		color:'red',
		backgroundColor:'skyblue'
	});*/


// to do list

	var toDoList = function(){

		var $toDo = $('#to-do'),
			$addNew = $('.add-new'),
			taskList;

		taskList = ['Task 1', 'Task 2','Task 3'];
		
		/* taskList.forEach(function( task ){
			console.log( task );
		});*/

		// http://api.jquery.com/each/

		$.each(taskList, function( index, task ){

			var $li = $('<li>');

				index++;
				$li.text('task: ' + index + " - " + task );

				$('<input type="button" value="Remove">').appendTo( $li );

			$li.appendTo( $toDo );
		});

		// Add new feature
		// http://api.jquery.com/bind/

		$addNew.bind('click', function(){
			var taskName,$newTask,taskCount;

			taskCount = $toDo.find('li').length;
			taskCount++;

			taskName = prompt('Add new task', 'Task name');

			$newTask = $('<li>').text( 'task: ' + taskCount + " - " + taskName );

			$('<input type="button" value="Remove">').appendTo( $newTask );

			$newTask.appendTo( $toDo );


			console.log( taskName );

			return false;
		});

		// Remove item

		$toDo.on('click','input',function(){
			var $that = $(this); // button

			$that.parent().remove();
		});


	}();


});










