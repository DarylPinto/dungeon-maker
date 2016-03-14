dungeon.settings = new Object();

//Save settings from GUI into a data object (dungeon.settings)
function save_settings(){

	//Average Party level
	dungeon.settings.apl = parseInt($('#party-level').val());

	//Challenge Rating
	dungeon.settings.cr = dungeon.settings.apl;

	dungeon.settings.traps = $('#trap-toggle input[type="checkbox"]').is(':checked');
	dungeon.settings.advanced_biomes = $('#biome-advanced-toggle input[type="checkbox"]').is(':checked');
	dungeon.settings.multi_biomes = $('#multi-biome-toggle input[type="checkbox"]').is(':checked');
	dungeon.settings.possible_difficulties = [];

	$('#difficulty-selection p input[type="checkbox"]').each(function(){
		if( $(this).is(':checked') ){
			dungeon.settings.possible_difficulties.push( $('label[for="'+$(this).attr('id')+'"]').text() );
		}
	});

}

//Return random difficulty from selected possibilites, also modify CR accordingly
function getDungeonDifficulty(){

	var difficulties = dungeon.settings.possible_difficulties;

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
	dungeon.settings.cr += challenge_modifier[selected_difficulty];

	//Return random difficulty determined above
	return selected_difficulty;

}

//Return selected Biome
function getBiome(){

}