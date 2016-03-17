(function(){

//Add materialize
$('head').append('<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
$('head').append('<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.css"  media="screen,projection"/>');
$('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>');

/////////////////////
//Utility functions//
/////////////////////

//Monster Object constructor
function Monster(name, xp, residing_biomes, url_snippet){
	this.name = name;
	this.xp = xp;
	this.residing_biomes = residing_biomes;
	this.url_snippet = url_snippet;
}

//Remove base URL and content after .html
function stripURL(str){
	str = str.replace('http://paizo.com/pathfinderRPG/prd/', '');
	return str.slice(0, str.indexOf('.html'));
}

//Get Monster Object via name
function getMonsterByName(name){
	var monster = null;
	monsters.forEach(function(m){
		if(m.name === name) monster = m;
	});
	return monster;
}

//Custom array to string function
function stringifyArr(arr){
	var str = "[";
	arr.forEach(function(e){
		str += "'"+e+"', ";
	});
	str += "]";
	return str.replace("', ]", "']");	
}

//Log monster object string to textarea
function logMonsters(){
	var output_str = '';
	monsters.forEach(function(m){
		output_str += "new Monster('"+m.name+"', "+m.xp+", "+stringifyArr(m.residing_biomes)+", '"+m.url_snippet+"'), \n";
	});
	$('#string-output').val(output_str);
}

////////
//Main//
////////

var html = [
'<main>',
'	<div id="select-monster"></div>',
'	<div id="select-biomes" class="row">',
'		<div id="basic" class="col s6">',
'			<h5>Basic Biomes</h5>',
'		</div>',
'		<div id="advanced" class="col s6">',
'			<h5>Advanced Biomes</h5>',
'		</div>',
'	</div>',
'	<textarea id="string-output" class="tooltipped" data-position="top" data-tooltip="Click to highlight, Ctrl+C to copy!" data-delay="50"></textarea>',
'</main>'
].join('');

var biomes = {	
	basic: ['Acidic', 'Air', 'Beach', 'Blue', 'Classic', 'Darkness', 'Earth', 'Electric', 'Fire', 'Forested', 'Frosted', 'Green', 'Insulated', 'Light', 'Masterwork', 'Metallic', 'Mountains', 'Orange', 'Plains', 'Red', 'Shadow', 'Sonic', 'Violet', 'Water', 'Yellow'],
	advanced: ['Angelic', 'Astral', 'Bouncing', 'Chaotic', 'Clockwork', 'Copyright', 'Dank', 'Demonic', 'Devilish', 'Draconic', 'Eldritch', 'Etheral', 'Fairy', 'Gilded', 'Industrial', 'Lunar', 'Orderly', 'Pixel', 'Plasma', 'Spatial', 'Stellar', 'Temporal', 'Urban', 'Vicordian', 'Void']
}

var monsters = [];

//Gather Monster info to store in `monsters` array
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

//Build GUI
$('body').empty().append(html);

//Add monsters to GUI
monsters.forEach(function(m){
	$('#select-monster').append('<p><input name="monster" type="radio" id="'+m.name+'" /><label for="'+m.name+'">'+m.name+'</label></p>');
});

//Add biomes to GUI
biomes.basic.forEach(function(b){
	$('#select-biomes #basic').append('<p><input type="checkbox" class="filled-in" id="'+b+'" /><label for="'+b+'">'+b+'</label></p>');
});
biomes.advanced.forEach(function(b){
	$('#select-biomes #advanced').append('<p><input type="checkbox" class="filled-in" id="'+b+'" /><label for="'+b+'">'+b+'</label></p>');
});

//Select First Monster from GUI
$('#select-monster p:first-child input').prop('checked', true);

//Log monster object(s) to textarea
logMonsters();

//When a monster is selected, select appropriate biome checkboxes
$('#select-monster input').change(function(){
	$('#select-biomes input').prop('checked', false);
	var monstername = $('#select-monster input:checked').attr('id');
	getMonsterByName(monstername).residing_biomes.forEach(function(b){
		$('#'+b).prop('checked', true);
	});
});

//When biome is selected, update current monster's `residing_biomes` and update textarea
$('#select-biomes input').change(function(){
	var biomes = [];
	$('#select-biomes input:checked').each(function(){
		biomes.push($(this).attr('id'));
	});
	var monster = getMonsterByName( $('#select-monster input:checked').attr('id') );
	monster.residing_biomes = biomes;
	logMonsters();
});

//When text area is clicked, select it
$('#string-output').click(function(){
	$(this).select();
})

})();