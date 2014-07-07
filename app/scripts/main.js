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
alien.img = new Image();
alien.img.src = 'images/alien.png';

//compile handlebars template
var players = {players: [blackKitteh, gatlingKitteh]};

var pSource   = $("#select").html();
var pTemplate = Handlebars.compile(pSource);
$('#start').append (pTemplate (players));

var fighters = [{monsters: [blob, alien]}, players];
var mSource   = $("#doBattle").html();
var mTemplate = Handlebars.compile(mSource);
$('#fight').append (mTemplate (fighters));

	