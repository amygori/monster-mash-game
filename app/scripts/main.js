// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.

// Monster constructor
function Monster(health, name) {
	this.life = 20;
	this.name = name;
	this.whack = $('.monster').click(function (whack){
		console.log('WHACK!');
		this.life--;
		if(this.life = 0){
			alert ('You defeated the monster!');
			$(#start).show();
		};//some code here that will alert win and return to beginning
}

// Player constructor
function Player (name) {
	this.name = name;
}


// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
var nun = new Player({
	name: 'Nun'
});

var priest = new Player({
	name: 'Priest'
});

var blob = new Monster({
	name: 'The Blob';

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

//Hide the divs as needed
/*$( "#start" ).click(function( event ) {
  $( this ).hide();
});*/
 


//compile handlebars template
/*var source   = $("#select").html();
var template = Handlebars.compile(source);*/

var attackMode = function(whack){
	while(Monster.health>0){
		
		return Monster.health;
		alert('The Monster is dead!');
	}
}

	

		attackMode.call

	})
//}
		



