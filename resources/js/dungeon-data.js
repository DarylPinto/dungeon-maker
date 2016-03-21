var dungeon = new Object();

//Data object containing template information to build the dungeon with
dungeon.data = new Object();

	dungeon.data.min_apl = 0;
	dungeon.data.max_apl = 20;

	//Maximum experience points per challenge rating
	//Use challenge rating as index to access values
	//ex. dungeon.data.max_xp_for_cr[6] = 2400
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

	//Object constructor for biomes
	function Biome(name, color){
		this.name = name;
		this.color = color;
	}

	dungeon.data.biomes = {
		basic: [
			new Biome('Classic',    '#FFEAF6'),
			new Biome('Earth',      '#CC8B78'),
			new Biome('Air',        '#DEDEDE'),
			new Biome('Fire',       '#FFB08A'),
			new Biome('Water',      '#A9E7F9'),
			new Biome('Light',      '#FFF9CA'),
			new Biome('Shadow',     '#3A3A3A'),
			new Biome('Darkness',   '#4E3C58'),
			new Biome('Forested',   '#74BD7D'),
			new Biome('Plains',     '#C5FFAE'),
			new Biome('Beach',      '#AEFFF0'),
			new Biome('Metallic',   '#779198'),
			new Biome('Electric',   '#E9FF70'),
			new Biome('Mountains',  '#D0DCE6'),
			new Biome('Red',        '#FF9494'),
			new Biome('Orange',     '#FFC884'),
			new Biome('Yellow',     '#FEFFA4'),
			new Biome('Green',      '#9CF39F'),
			new Biome('Blue',       '#9CCBF3'),
			new Biome('Violet',     '#BAA0D6'),
			new Biome('Sonic',      '#90A3CE'),
			new Biome('Acidic',     '#E6FFB6'),
			new Biome('Frosted',    '#CBF3FF'),
			new Biome('Insulated',  '#CC78A3'),
			new Biome('Masterwork', '#D0B772')
		],

		advanced: [
			new Biome('Pixel',      '#DDB1FF'),
			new Biome('Demonic',    '#611B1B'),
			new Biome('Void',       '#120F38'),
			new Biome('Angelic',    '#FBECB6'),
			new Biome('Eldritch',   '#73A56A'),
			new Biome('Chaotic',    '#4C2F45'),
			new Biome('Orderly',    '#FDF2C9'),
			new Biome('Plasma',     '#92EAA1'),
			new Biome('Industrial', '#9E9E9E'),
			new Biome('Clockwork',  '#6E80BF'),
			new Biome('Temporal',   '#FFFFFF'),
			new Biome('Spatial',    '#5D5D5D'),
			new Biome('Dank',       '#5D7B65'),
			new Biome('Devilish',   '#8C3636'),
			new Biome('Stellar',    '#EAAF71'),
			new Biome('Lunar',      '#57598A'),
			new Biome('Vicordian',  '#9772D2'),
			new Biome('Etheral',    '#C1F9FF'),
			new Biome('Astral',     '#E3D7FF'),
			new Biome('Bouncing',   '#FED7FF'),
			new Biome('Gilded',     '#B7A162'),
			new Biome('Draconic',   '#BFAEE8'),
			new Biome('Fairy',      '#FFC7E3'),
			new Biome('Urban',      '#7A87B7'),
			new Biome('Copyright',  '#6F6F6F')
		]
	}