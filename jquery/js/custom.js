
var taskList = [
		"How to set text-field value with Javascript?",
		"bug(ripple): Clicking on element with ripple, stays highlighted.",
		"Clarification of codepen color tool",
		"Suggestion: wrap compound sourcemaps on libsass",
		"Snackbar will not be hidden when the visibilitychange is fired after call ",
		"List item graphic gets squished when text overflows",
		"If there is a long content in MDC select box options",
		"widespread issues with font scaling"
	];

	function addTask( $currentList, taskName, prepend ){

		var $taskItem, $removeBtn, $dueDate;

		$taskItem = $('<li>')
						.text( taskName );

		$removeBtn = $('<button>')
						.text('remove')
						.addClass('remove');

		$taskItem.append( $removeBtn );

		$dueDate = $('<input>');

		$taskItem.append( $dueDate  );

		if( $.datepicker ){

			$dueDate
				.datepicker({
					dateFormat: "yy/mm/dd"
				})
				.datepicker("setDate", new Date() );
		}

		if( prepend ){
			$currentList.prepend( $taskItem );
		}else{
			$currentList.append( $taskItem );
		}

	}

var handler = function(){

	// DOM Ready
	var $taskPanel = $('.task-list-panel'),
		$newList,$currentTask;

		$newList= $('<ul>');


	taskList.forEach(function( task, index ){

		addTask( $newList, task );
	});

	$taskPanel.append( $newList );

	/* Remove items from the list */

	$taskPanel.on('click','.remove', function(){

		var $this = $(this);

		$this.parent().remove();

	});

	$taskPanel.on('click','.add-task', function(){

		var newTask = prompt('Add new task', 'Add your task name here');

		addTask( $newList, newTask, true );

		return false;

	});

};

$( document ).ready( handler );




