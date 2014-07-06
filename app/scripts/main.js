//Hide the divs as needed
$("#fight").hide();
$( "#start" ).click(function(event) {
  $("#start").hide();
  $("#fight").show();
});

// CONSTRUCTORS


// Monster constructor
function Monster(life, name) {
	this.life = life;
	this.name = name;
	this.whack = $('.monster').click(function (whack){
		console.log('WHACK!');
		this.life--;
		if(this.life = 0){
			alert ('Success! Victory is yours!');
			$("#start").show();
		};//some code here that will alert win and return to beginning
})};

// Player constructor
function Player(name) {
	this.name = name;
};


// GLOBAL VARIABLES

var blackKitteh = new Player('Black Kitteh');
blackKitteh.img = new Image('images/blackKitteh.png');
blackKitteh.img.src = 'images/blackKitteh.png';


var gatlingKitteh = new Player('Gatling Kitteh');
gatlingKitteh.img = new Image('images/gatlingKitteh.jpg');
gatlingKitteh.img.src = 'images/gatlingKitteh.jpg';
$(gatlingKitteh).click(function (){
	$("#fight").show();
})	

var blob = new Monster(25,'The Blob');
blob.img = new Image();
blob.img.src = 'images/blob.png';

var alien = new Monster(50, 'The Alien');
alien.img = new Image('images/alien.png');
alien.img.src = 'images/alien.png';


// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };
 

//compile handlebars template
var players = [blackKitteh, gatlingKitteh];

var source   = $("#select").html();
var template = Handlebars.compile(source);
$('#start').append (template (players));


	