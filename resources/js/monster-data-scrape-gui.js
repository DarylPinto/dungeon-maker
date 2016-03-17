/***************************************

Bookmarklet for collecting monster data with a GUI to add biomes of residence

Yes I know it's coded like garbage.

https://docs.google.com/document/d/1d4z_ztfSXV8ZtQddIXO0RVZqA2bN1t3s0LWCU50HzAA/edit?usp=sharing_eid&ts=56e8c6af

***************************************/

(function(){

///////////////////
//Add materialize//
///////////////////

$('head').append('<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
$('head').append('<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.css"  media="screen,projection"/>');
$('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>');
$('head').append('<style type="text/css">body div{font-family: "Roboto", sans-serif;}[type="radio"]:not(:checked) + label:before{border: 2px solid transparent}</style>')
/////////////////////
//Collect Page Info//
/////////////////////

biomes = {
		
		basic: [
			'Classic',
			'Earth',
			'Air',
			'Fire',
			'Water',
			'Light',
			'Shadow',
			'Darkness',
			'Forrested',
			'Plains',
			'Beach',
			'Metallic',
			'Electric',
			'Mountains',
			'Red',
			'Orange',
			'Yellow',
			'Green',
			'Blue',
			'Violet',
			'Sonic',
			'Acidic',
			'Frosted',
			'Insulated',
			'Masterwork'
		],

		advanced: [
			'Pixel',
			'Demonic',
			'Void',
			'Angelic',
			'Eldritch',
			'Chaotic',
			'Orderly',
			'Plasma',
			'Industrial',
			'Clockwork',
			'Temporal',
			'Spatial',
			'Dank',
			'Automotive',
			'Stellar',
			'Lunar',
			'Vicordian',
			'Etheral',
			'Astral',
			'Bouncing',
			'Gilded',
			'Draconic',
			'Fairy',
			'Urban',
			'Copyright'
		]

	}

function Monster(name, xp, residing_biomes, url_snippet){
	this.name = name;
	this.xp = xp;
	this.residing_biomes = residing_biomes;
	this.url_snippet = url_snippet;
}

var monsters = [];

function stripURL(str){
	str = str.replace('http://paizo.com/pathfinderRPG/prd/', '');
	return str.slice(0, str.indexOf('#'));
}
function getMonsterByName(name){
	var monster = null;
	monsters.forEach(function(m){
		if(m.name === name) monster = m;
	});
	return monster;
}
function stringifyArr(arr){
	var str = "[";
	arr.forEach(function(e){
		str += "'"+e+"'";
		str += ", ";
	});
	str += "]"
	str = str.replace("', ]", "']");
	return str;
}
function logMonsters(){
	var output_str = '';
	monsters.forEach(function(m){
		output_str += "new Monster('"+m.name+"', "+m.xp+", "+stringifyArr(m.residing_biomes)+", '"+m.url_snippet+"'), \n";
	});
	$('#string-output').val(output_str);
}
$('.stat-block-title').each(function(){

	var m = new Monster();

	//Remove span tag inside title (usually contains CR)
	$(this).find('span').remove();
	//Get Monster name, remove anything that looks like a CR value (incase it wasn't in the removed span)
	m.name = $(this).text().replace(/CR \d/g, '').trim();
	//get XP value by reading the immediately following paragraph
	m.xp = $(this).next('p').text();
	//Only keep XP value if the characters 'XP' were in the paragraph (sometimes they put other stuff here like gold)
	m.xp = ( m.xp.toUpperCase().indexOf('XP') > -1 ) ? m.xp.replace(/\D/g, '') : '';
	//Get URL snippet
	m.url_snippet = stripURL(location.href);
	//Add empty biome array
	m.residing_biomes = [];
	//If XP isn't blank, add line to output
	if(m.xp.length > 0) monsters.push(m);
});

/////////////
//Build GUI//
/////////////

var main = document.createElement('main');

$(main).append('<div id="select-monster"></div>');
$(main).append('<div id="select-biomes" class="row"></div>');
$(main).append('<textarea id="string-output"></textarea>');

$('body').empty().append(main);

$(main).css({
	'position' : 'relative',
	'height' : '100vh',
	'width' : '100vw',
	'font-family' : '"Roboto", sans-serif',
	'background-color' : 'white'
});

$('#select-monster').css({
	'position' : 'absolute',
	'overflow' : 'auto',
	'width' : '60vw',
	'height' : '65vh',
	'padding' : '35px',
	'left' : '0',
	'top' : '0'
});

$('#select-biomes').css({
	'position' : 'absolute',
	'overflow' : 'auto',
	'width' : '40vw',
	'height' : '100vh',
	'background-color' : 'white',
	'z-index' : '10',
	'right' : '0',
	'top' : '0',
	'box-shadow' : '0 0 10px rgba(0,0,0,0.3)'
});

$('#string-output').css({
	'position' : 'absolute',
	'padding' : '20px',
	'width' : '60vw',
	'height' : '35vh',
	'left' : '0',
	'bottom' : '0',
	'border' : 'none',
	'font-family' : 'monospace',
	'cursor' : 'pointer',
	'box-shadow' : '0 0 10px rgba(0,0,0,0.3)'
}).addClass('tooltipped').attr({
	'data-position' : 'top',
	'data-tooltip' : 'Click to highlight, then Ctrl+C to copy!',
	'data-delay' : '50'
});

monsters.forEach(function(m){
	$('#select-monster').append('<p><input name="monster" type="radio" id="'+m.name+'" /><label for="'+m.name+'">'+m.name+'</label></p>');
});

$('#select-biomes').append('<div id="basic" class="col s6"></div>').append('<div id="advanced" class="col s6"></div>');

$('#select-biomes #basic').append('<h5>Basic Biomes</h5>');

biomes.basic.forEach(function(b){
	$('#select-biomes #basic').append('<p><input type="checkbox" class="filled-in" id="'+b+'" /><label for="'+b+'">'+b+'</label></p>');
});

$('#select-biomes #advanced').append('<h5>Advanced Biomes</h5>');

biomes.advanced.forEach(function(b){
	$('#select-biomes #advanced').append('<p><input type="checkbox" class="filled-in" id="'+b+'" /><label for="'+b+'">'+b+'</label></p>');
});

$('#select-biomes p').css({
	'margin-top' : '0',
	'margin-bottom' : '3px',
	'margin-left' : '20px'
});

$('#select-biomes h5').css({'margin-left': '20px'});

$('#select-monster p:first-child input').prop( "checked", true );

logMonsters();

$('#select-monster input').change(function(){
	$('#select-biomes input').prop('checked', false);
	var monstername = $('#select-monster input:checked').attr('id');
	getMonsterByName(monstername).residing_biomes.forEach(function(b){
		$('#'+b).prop('checked', true);
	});
});

$('#select-biomes input').change(function(){
	var biomes = [];
	$('#select-biomes input:checked').each(function(){
		biomes.push($(this).attr('id'));
	});
	var monster = getMonsterByName( $('#select-monster input:checked').attr('id') );
	monster.residing_biomes = biomes;
	logMonsters();
});

$('#string-output').click(function(){
	$(this).select();
})



})();