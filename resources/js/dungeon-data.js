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

	dungeon.data.biomes = {
		
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