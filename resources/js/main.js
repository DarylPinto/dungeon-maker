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

//Search through Monster database and find monster with name property: `name`
function getMonsterByName(name){
	var monster = null;
	dungeon.data.monster_db.forEach(function(m){
		if(m.name === name){
			monster = m;
		}
	});
	return monster;
}

//Search through any array of Monster objects, return the one with the lowest xp
function weakestMonsterIn(monster_arr){
	//Choose first monster for comparison
	var weakest = monster_arr[0];
	//For every monster, if they have less xp than current weakest
	//set them to be the new weakest
	monster_arr.forEach(function(monster){
		if(monster.xp < weakest.xp) weakest = monster;
	});
	return weakest;
}

//Search through array of Monster objects (`monster_arr`) returning
//one with the highest xp that's still lower or equal to `max_xp`
function strongestMonsterLessXpThan(max_xp, monster_arr){
	//Choose weakest monster for comparison
	var strongest = weakestMonsterIn(monster_arr);
	//For every monster, if they have more xp than current strongest
	//set them to be the new strongest
	monster_arr.forEach(function(monster){
		if(monster.xp > strongest.xp && monster.xp <= max_xp) strongest = monster;
	});
	return strongest;
}

//Monsters from monster_db that match an array of biomes
function monstersResidingIn(biomeArr){
	var filtered = dungeon.data.monster_db.filter(function(monster){
		var monster_qualifies = false;
		biomeArr.forEach(function(biome){
			if(monster.residing_biomes.indexOf(biome) > -1){
				monster_qualifies = true;
			}
		});
		return monster_qualifies;
	});
	if(filtered.length === 0){
		throw "Error: No monsters match dungeon's biome(s)";
	}
	return filtered;
}

//Test to see how close dungeon xp approaches max_xp for challenge rating
function XP_test(){
	var max = dungeon.data.xp_limit_for_cr[dungeon.generated.cr];
	var current = 0;
	dungeon.generated.monsters.forEach(function(m){
		current += m.xp;
	});
	console.log('Max XP: ' + max.toString() + ', Dungeon XP: ' + current.toString() + ', Max - Current = ' + (max - current).toString());
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

	$('#generate-dungeon-btn').css('transform', 'translateY(-120px)');
	$('#user-settings').addClass('controls-hidden');

	window.setTimeout(function(){
		$('#generate-dungeon-btn').addClass('growing');
	}, 10);
}

function changeBackgroundColorToMatchBiome(biomeColorArr){
	if(biomeColorArr.length === 1){
		$('main').css('background-color', color1);
	}else{
		$('main').css('background' : 'linear-gradient('+color1+','+color2+')');
	}
}

////////////////////
// Main Functions //
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
	selected_biomes.push( randItemFrom(biome_pool).name );

	//If multi-biome is enabled add another random biome
	if(dungeon.settings.multi_biomes === true){
		selected_biomes.push( randItemFrom(biome_pool).name );
	}

	//Save selected biomes
	dungeon.generated.biomes = selected_biomes;

}

//Add monsters to the dungeon
function populateDungeon(){
	var biomes = dungeon.generated.biomes;
	var xp_limit = dungeon.data.xp_limit_for_cr[dungeon.generated.cr];
	var total_xp = 0;
	var monster_pool = monstersResidingIn(biomes);
	var weakest = weakestMonsterIn(monster_pool);

	dungeon.generated.monsters = [];

	//Add monsters until there's no room for any more (based on max xp for dungeon)
	while(xp_limit - total_xp > weakest.xp){
		var xp_remaining = xp_limit - total_xp;

		//Randomly select monster from pool
		var added_monster = randItemFrom(monster_pool);

		//If random monster's XP would put it over the xp cap,
		//Replace it with another random monster
		if(added_monster.xp > xp_remaining){
			added_monster = strongestMonsterLessXpThan(xp_remaining, monster_pool);
		}

		//Add selected monster
		dungeon.generated.monsters.push(added_monster);
		//Increment total dungeon xp
		total_xp += added_monster.xp;
	}

	//If dungeon has no monsters because xp limit is too low,
	//add weakest monster from the monster pool so there is at least
	//one thing to fight
	if(dungeon.generated.monsters.length === 0){
		dungeon.generated.monsters.push(weakest);
	}
}

//Array of Objects containing monster amount/name and their respective links
//NOTE: Does not return array of actual Monster objects, just manipulated data for displaying on page
function setFormattedMonsters(){

	var formatted_monsters = [];

	var monsters_with_amounts = getNumberOfItemsIn(dungeon.generated.monsters.map(function(m){
		return m.name;
	}));

	for(amount in monsters_with_amounts){
		if(monsters_with_amounts.hasOwnProperty(amount)){
			if(monsters_with_amounts[amount] === 1){
				formatted_monsters.push({
					text: amount,
					link: getMonsterByName(amount).wiki
				});
			}else{
				formatted_monsters.push({
					text: monsters_with_amounts[amount] + ' ' + amount + 's',
					link: getMonsterByName(amount).wiki
				});
			}
		}
	}

	dungeon.generated.formatted_monsters = formatted_monsters;

}

//Main function
function main(){

	//Save settings from GUI
	save_settings();

	setDungeonDifficulty();

	setBiome();

	populateDungeon();

	setFormattedMonsters();

	//Transition view from settings to generated dungeon
	transitionCard();

	changeBackgroundColorToMatchBiome(dungeon.generated.biomes.map(function(biome){
		return biome.color;
	}));

	//Log generated dungeon to console
	console.log(dungeon.generated);
}