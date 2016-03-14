var dungeon_settings = new Object();

//Stores settings from form into an object
function store_settings(){

	//Average Party level
	dungeon_settings.apl = parseInt($('#party-level').val());

	//Challenge Rating
	dungeon_settings.cr = dungeon_settings.apl;

	dungeon_settings.traps = $('#trap-toggle input[type="checkbox"]').is(':checked');
	dungeon_settings.advanced_biomes = $('#biome-advanced-toggle input[type="checkbox"]').is(':checked');
	dungeon_settings.multi_biomes = $('#multi-biome-toggle input[type="checkbox"]').is(':checked');
	dungeon_settings.possible_difficulties = [];

	$('#difficulty-selection p input[type="checkbox"]').each(function(){
		if( $(this).is(':checked') ){
			dungeon_settings.possible_difficulties.push( $('label[for="'+$(this).attr('id')+'"]').text() );
		}
	});

}

//Return random difficulty from selected possibilites, also modify CR accordingly
function getDungeonDifficulty(){

	var difficulties = dungeon_settings.possible_difficulties;

	//Choose random difficulty
	var selected_difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

	//Difficulty Challenge Rating Modifier
	var challenge_modifier = {
		'Easy' : -1,
		'Average' : 0,
		'Challenging' : 1,
		'Hard' : 2,
		'Epic' : 3
	}

	//Modify Challenge Rating based on difficulty	
	dungeon_settings.cr += challenge_modifier[selected_difficulty];

	//Return random difficulty determined above
	return selected_difficulty;

}

//Return selected Biome
function getBiome(){

}