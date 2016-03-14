///////////////////////
// Utility functions //
///////////////////////


//Random number between low and high
//High inclusive, Low non-inclusive
function rand(low, high){
	var difference = high - low;
	return	Math.ceil(Math.random() * difference) + low;
}


////////////////////
// Main Functions //
////////////////////


//Data object containing settings from GUI
dungeon.settings = new Object();

//Data object containing randomly generated dungeon
dungeon.data = new Object();

//Save settings from GUI into a data object (dungeon.settings)
function save_settings(){

	//Prevent Average Party Level in GUI from going over maximum (20) or under 0
	if( parseInt($('#party-level').val()) > dungeon.build_info.max_apl ){
		$('#party-level').val(dungeon.build_info.max_apl);
	}else if( parseInt($('#party-level').val()) < 0 ){
		$('#party-level').val(0);
	}

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
function setDungeonDifficulty(){

	var difficulties = dungeon.settings.possible_difficulties;

	//Choose random difficulty
	var selected_difficulty = difficulties[ rand(0, difficulties.length) ];

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

	//Prevent challenge rating from going over maximum CR or under 0
	var max_cr = dungeon.build_info.max_xp_for_cr.length - 1;
	if(dungeon.settings.cr < 0) dungeon.settings.cr = 0;
	if(dungeon.settings.cr > max_cr) dungeon.settings.cr = max_cr;

	//Save random difficulty determined above
	dungeon.data.difficulty = selected_difficulty;

}

//Return selected Biome
function getBiome(){

}

//Main function
function main(){

	//Save settings from GUI
	save_settings();

	setDungeonDifficulty();

	//Log info to console
	console.log(dungeon);
}