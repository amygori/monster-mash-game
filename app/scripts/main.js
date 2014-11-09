"use strict";

//Hide the divs as needed
$("#fight").hide();
$( "#start" ).click(function(event) {
  $("#start").hide();
  $("#fight").toggle();
});

// Monster constructor
function Monster(life, name) {
	this.life = life;
	this.name = name;
}

// Player constructor
function Player(name) {
	this.name = name;
}

//attack: this just subtracts life from a monster
var $whack = $('.monster').click(function(){
		console.log('WHACK!');
		this.life--;
		if(this.life === 0){
			window.alert("You've defeated the monster!");
			$("#start").show();
		}
	});
//some code here that will alert win and return to beginning


// GLOBAL VARIABLES

var blackKitteh = new Player('Black Kitteh');
$(blackKitteh).attr('src', 'images/blackKitteh.png');


var gatlingKitteh = new Player('Gatling Kitteh');
$(gatlingKitteh).attr('src', 'images/gatlingKitteh.jpg');
$(gatlingKitteh).click(function (){
	$("#fight").show();
});

var blob = new Monster(25,'The Blob');
$(blob).attr('src', 'images/blob.png');

var alien = new Monster(50, 'The Alien');
$(alien).attr('src', 'images/alien.png');

var players = [blackKitteh, gatlingKitteh];
var monsters = [blob, alien];

//function {
		//show two players to choose from
//}



//compile handlebars template
/*var players = {players: [blackKitteh, gatlingKitteh]};
var pSource   = $("#select").html();
var pTemplate = Handlebars.compile(pSource);
$('#start').append (pTemplate (players));

var fighters = [{monsters: [blob, alien]}, players];
var mSource   = $("#doBattle").html();
var mTemplate = Handlebars.compile(mSource);
$('#fight').append (mTemplate (fighters));*/

	