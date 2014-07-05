//Hide the divs as needed
$(#fight1).hide();
$("#fight2").hide();

$( "#start" ).click(function( event ) {
  $( this ).hide();
  $("#fight1").show();
});

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
			alert ('Victory is yours!');
			$(#start).show();
		};//some code here that will alert win and return to beginning
}

// Player constructor
function Player (name) {
	this.name = name;
}


// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
var blackKitteh = new Player({
	name: 'Black Kitteh';
	var img = new Image(); 
	img.src = 'blackKitteh.png';
});

var gatlingKitteh = new Player({
	name: 'Gatling Kitteh';
	var img = new Image(); 
	img.src = 'gatlingKitteh.jpg';
});

var blob = new Monster({
	name: 'The Blob';
	var img = new Image(); 
	img.src = 'blob.png';

});

var Alien = new Monster({
	name: 'The Alien';
	var img = new Image(); 
	img.src = 'alien.png';
});

// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };



// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };


 


//compile handlebars template
/*var source   = $("#select").html();
var template = Handlebars.compile(source);*/


//
	