/*
https://docs.google.com/document/d/1spuipUu2dyQ1tWzJ5JHuH4CdZQPlodnkh8wbwu6vXso/edit

https://docs.google.com/spreadsheets/d/1gJj7eydUiJz0bc5oyz3m3YTBT1AkTy1npNHteQDDEkE/edit#gid=0

https://docs.google.com/spreadsheets/d/1njy4hq8C7HfXLcd-qtXz4p3FYp10LE9_qn5cHbaq5l0/edit#gid=0
*/

///////////////////////
// Utility functions //
///////////////////////

//Random number between low and high
//High inclusive, Low non-inclusive
function rand(low, high){
	var difference = high - low;
	return	Math.ceil(Math.random() * difference) + low;
}

//Return a random element from an array
function randItemFrom(array){
	return array[ rand(0, array.length) - 1 ];
}

//Return object with unique elements from array
//and how many times they appear
function getNumberOfItemsIn(array){
	var  count = new Object();
	array.forEach(function(i) { count[i] = (count[i]||0)+1; });
	return count;
}

//////////////////////
// DOM manipulation //
//////////////////////

//Ensure at least one checkbox within `parent_selector` is always checked
function preventUncheckAllIn(parent_selector){

	//Enable all boxes
	$(parent_selector + ' input').removeAttr('disabled');

	//Find number of boxes currently checked
	var amount_checked = 0;
	$(parent_selector + ' input').each(function(){
		if( $(this).is(':checked') ) amount_checked += 1;
	})

	//If only one is checked, disable it (make it unclickable)
	if( amount_checked === 1){
		$(parent_selector + ' input:checked').attr('disabled', 'disabled');
	}
}

//Ensure input[type="number"] cannot be  or lower than min  higher than max
function constrainNumberInput(el, min, max){
	if( parseInt(el.value) < min ) el.value = min;
	if( parseInt(el.value) > max ) el.value = max;
}

function transitionCard(){

	var card_height = $('#user-settings').innerHeight();
	var btn_height = $('#generate-dungeon-btn').outerHeight();
	var card_bottom_padding = parseInt($('#user-settings').css('padding-bottom'));
	var center_offset = card_height / 2 - btn_height / 2 - card_bottom_padding;
	$('#user-settings').addClass('controls-hidden');
		$('#generate-dungeon-btn').css('transform', 'translateY(-'+center_offset+'px)');

	window.setTimeout(function(){
		$('#generate-dungeon-btn').addClass('growing');
	}, 350);
}

////////////////////
// Main Functions //;
////////////////////


//Data object containing settings from GUI
dungeon.settings = new Object();

//Data object containing randomly generated dungeon
dungeon.generated = new Object();

//Save settings from GUI into a data object (dungeon.settings)
function save_settings(){

	//Prevent Average Party Level in GUI from going over maximum (20) or under 0
	if( parseInt($('#party-level').val()) > dungeon.data.max_apl ){
		$('#party-level').val(dungeon.data.max_apl);
	}else if( parseInt($('#party-level').val()) < dungeon.data.min_apl ){
		$('#party-level').val(dungeon.data.min_apl);
	}
	
	//Average Party level (int)
	dungeon.settings.apl = parseInt($('#party-level').val());
	
	//Potential for traps (bool)
	dungeon.settings.traps = $('#trap-toggle input').is(':checked');
	
	//Potential for advanced biomes (bool)
	dungeon.settings.advanced_biomes = $('#biome-advanced-toggle input').is(':checked');
	
	//Potential for multi-biome dungeon (bool)
	dungeon.settings.multi_biomes = $('#multi-biome-toggle input').is(':checked');

	//Potential difficulties (array)
	dungeon.settings.possible_difficulties = [];
	$('#difficulty-selection p input[type="checkbox"]').each(function(){
		if( $(this).is(':checked') ){
			dungeon.settings.possible_difficulties
				.push( $(this).siblings('label').text() );
		}
	});

}

//Return random difficulty from selected possibilites, also modify CR accordingly
function setDungeonDifficulty(){

	var difficulties = dungeon.settings.possible_difficulties;

	//Choose random difficulty
	var selected_difficulty = randItemFrom(difficulties);

	//Difficulty Challenge Rating Modifier
	var challenge_modifier = {
		'Easy' : -1,
		'Average' : 0,
		'Challenging' : 1,
		'Hard' : 2,
		'Epic' : 3
	}

	//Save random difficulty determined above
	dungeon.generated.difficulty = selected_difficulty;

	//Save challenge rating by adding challenge modifier for
	//selected difficulty to APL	
	dungeon.generated.cr = dungeon.settings.apl + challenge_modifier[selected_difficulty];

	//Prevent challenge rating from going over maximum CR or under 0
	var max_cr = dungeon.data.xp_limit_for_cr.length - 1;
	if(dungeon.generated.cr < 0) dungeon.generated.cr = 0;
	if(dungeon.generated.cr > max_cr) dungeon.generated.cr = max_cr;

}

function setBiome(){

	var biome_pool = dungeon.data.biomes.basic;
	var selected_biomes = [];

	//If advanced biomes are toggled on, add them to the pool of potential biomes
	if(dungeon.settings.advanced_biomes === true){
		biome_pool = dungeon.data.biomes.basic
			.concat(dungeon.data.biomes.advanced);
	}

	//Add a random biome
	selected_biomes.push( randItemFrom(biome_pool) );

	//If multi-biome is enabled add another random biome
	if(dungeon.settings.multi_biomes === true){
		selected_biomes.push( randItemFrom(biome_pool) );
	}

	//Save selected biomes
	dungeon.generated.biomes = selected_biomes;

}

//Main function
function main(){

	//Save settings from GUI
	save_settings();

	setDungeonDifficulty();

	setBiome();

	//Transition view from settings to generated dungeon
	transitionCard();

	//Log generated dungeon to console
	console.log(dungeon.generated);
}