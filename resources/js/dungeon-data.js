var dungeon = new Object();

//Data object containing template information to build the dungeon with
dungeon.data = new Object();

	dungeon.data.min_apl = 0;
	dungeon.data.max_apl = 20;

	//Maximum experience points per challenge rating
	//Use challenge rating as index to access values
	//ex. dungeon.data.xp_limit_for_cr[6] = 2400
	dungeon.data.xp_limit_for_cr = [ 
		200,
		400,
		600,
		800,
		1200,
		1600,
		2400,
		3200,
		4800,
		6400,
		9600,
		12800,
		19200,
		25600,
		38400,
		51200,
		76800,
		102400,
		153600,
		204800,
		307200,
		409600,
		614400,
		819200,
		1228800,
		1638400 
	]

	//Maximum GOLD points per challenge rating
	//Use challenge rating as index to access values
	//ex. dungeon.data.gp_limit_for_cr[6] = 3000
	dungeon.data.gp_limit_for_cr = [ 
		200,
		400,
		800,
		1200,
		1700,
		2300,
		3000,
		3900,
		5000,
		6400,
		8200,
		10500,
		13500,
		17500,
		22000,
		29000,
		38000,
		48000,
		62000,
		79000,
		100000,
		135000,
		187000,
		223000,
		265000,
		300000
	]

	//Object constructor for biomes
	//isPrefix means biome name should come first in multi-biome dungeons
	function Biome(name, color, isPrefix){
		this.name = name;
		this.color = color;
		this.isPrefix = isPrefix;
	}

	dungeon.data.biomes = {
		basic: [
			new Biome('Classic',    '#FFEAF6', true  ),
			new Biome('Earth',      '#CC8B78', false ),
			new Biome('Air',        '#DEDEDE', false ),
			new Biome('Fire',       '#FFB08A', false ),
			new Biome('Water',      '#A9E7F9', false ),
			new Biome('Light',      '#FFF9CA', false ),
			new Biome('Shadow',     '#3A3A3A', true  ),
			new Biome('Darkness',   '#4E3C58', false ),
			new Biome('Forested',   '#74BD7D', true  ),
			new Biome('Plains',     '#C5FFAE', false ),
			new Biome('Beach',      '#AEFFF0', false ),
			new Biome('Metallic',   '#779198', true  ),
			new Biome('Electric',   '#E9FF70', true  ),
			new Biome('Mountains',  '#D0DCE6', false ),
			new Biome('Red',        '#FF9494', true  ),
			new Biome('Orange',     '#FFC884', true  ),
			new Biome('Yellow',     '#FEFFA4', true  ),
			new Biome('Green',      '#9CF39F', true  ),
			new Biome('Blue',       '#9CCBF3', true  ),
			new Biome('Violet',     '#BAA0D6', true  ),
			new Biome('Sonic',      '#90A3CE', true  ),
			new Biome('Acidic',     '#E6FFB6', true  ),
			new Biome('Frosted',    '#CBF3FF', true  ),
			new Biome('Insulated',  '#CC78A3', true  ),
			new Biome('Masterwork', '#D0B772', false )
		],

		advanced: [
			new Biome('Pixel',      '#DDB1FF', false ),
			new Biome('Demonic',    '#611B1B', true  ),
			new Biome('Void',       '#120F38', false ),
			new Biome('Angelic',    '#FBECB6', true  ),
			new Biome('Eldritch',   '#73A56A', false ),
			new Biome('Chaotic',    '#4C2F45', true  ),
			new Biome('Orderly',    '#FDF2C9', true  ),
			new Biome('Plasma',     '#92EAA1', false ),
			new Biome('Industrial', '#9E9E9E', true  ),
			new Biome('Clockwork',  '#6E80BF', false ),
			new Biome('Temporal',   '#FFFFFF', true  ),
			new Biome('Spatial',    '#5D5D5D', true  ),
			new Biome('Dank',       '#5D7B65', true  ),
			new Biome('Devilish',   '#8C3636', true  ),
			new Biome('Stellar',    '#EAAF71', true  ),
			new Biome('Lunar',      '#57598A', true  ),
			new Biome('Vicordian',  '#9772D2', true  ),
			new Biome('Etheral',    '#C1F9FF', true  ),
			new Biome('Astral',     '#E3D7FF', true  ),
			new Biome('Bouncing',   '#FED7FF', true  ),
			new Biome('Gilded',     '#D6CE62', true  ),
			new Biome('Draconic',   '#BFAEE8', true  ),
			new Biome('Fairy',      '#FFC7E3', false ),
			new Biome('Urban',      '#7A87B7', true  ),
			new Biome('Copyright',  '#6F6F6F', false )
		]
	}