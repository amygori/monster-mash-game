// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.

// Monster constructor
function Monster(options) {
	options:options || {};
	this.health =  0;
	this.name = options.name;
}

// Player constructor
function Player (options) {
	options:options || {};
	this.name = options.name;
}


// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
var nun = new Player({

	});

var priest = new Player({

});

var Godzilla = new Monster({

});

var Mothra = new Monster({

});

// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };



// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };
var attackMode = function(Monster){ 
	$('.monster a').click(function (e){
		e.preventDefault();
		console.log('WHACK!');
		if Monster.health<===20 {
			return Monster.health+5;
		}
		else {
			alert ("You won!");
			window.prompt ("Play again?");
		}
	});
};


