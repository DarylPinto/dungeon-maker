var dungeon = new Object();

//Data object containing template information to build the dungeon with
dungeon.build_info = new Object();

	dungeon.build_info.min_apl = 0;
	dungeon.build_info.max_apl = 20;

	//Maximum experience points per challenge rating
	//Use challenge rating as index to access values
	//ex. dungeon.build_info.max_xp_for_cr[6] = 2400
	dungeon.build_info.max_xp_for_cr = [ 
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

	dungeon.build_info.biomes = {
		
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

	dungeon.build_info.monsters = [
		new Monter( 'Almiraj', 										400, 				['Classic'] ),
		new Monter( 'Amoeba Swarm', 							400, 				['Classic'] ),
		new Monter( 'Amphisbaena', 								1200, 			['Classic'] ),
		new Monter( 'Ankheg', 										800, 				['Classic'] ),
		new Monter( 'Ant Lion, Giant', 						1600, 			['Classic'] ),
		new Monter( 'Ant Lion, Giant Adult', 			2400, 			['Classic'] ),
		new Monter( 'Ant, Giant (Drone)', 				600, 				['Classic'] ),
		new Monter( 'Ant, Giant (Queen)', 				800, 				['Classic'] ),
		new Monter( 'Ant, Giant (Soldier)', 			700, 				['Classic'] ),
		new Monter( 'Ant, Giant (Worker)', 				400, 				['Classic'] ),
		new Monter( 'Army Ant Swarm', 						1600, 			['Classic'] ),
		new Monter( 'Attic Whisperer', 						1200, 			['Classic'] ),
		new Monter( 'Aurumvorax', 								6400, 			['Classic'] ),
		new Monter( 'Baku', 											4800, 			['Classic'] ),
		new Monter( 'Bandersnatch', 							102400, 		['Classic'] ),
		new Monter( 'Bandersnatch, Confounding', 	153600, 		['Classic'] ),
		new Monter( 'Bandersnatch, Frumious', 		204800, 		['Classic'] ),
		new Monter( 'Bandersnatch, Lesser', 			25600, 			['Classic'] ),
		new Monter( 'Bandersnatch, Magicbane', 		307200, 		['Classic'] ),
		new Monter( 'Basilisk', 									1600, 			['Classic'] ),
		new Monter( 'Bat, Mobat', 								800, 				['Classic'] ),
		new Monter( 'Bat, Skaveling', 						1600, 			['Classic'] ),
		new Monter( 'Baykok', 										6400, 			['Classic'] ),
		new Monter( 'Bee, Giant', 								400, 				['Classic'] ),
		new Monter( 'Bee, Giant Bumblebee', 			600, 				['Classic'] ),
		new Monter( 'Bee, Giant Queen', 					1600, 			['Classic'] ),
		new Monter( 'Beetle, Bombardier', 				600, 				['Classic'] ),
		new Monter( 'Beetle, Fire', 							135, 				['Classic'] ),
		new Monter( 'Beetle, Flash', 							200, 				['Classic'] ),
		new Monter( 'Beetle, Giant Stag', 				1200, 			['Classic'] ),
		new Monter( 'Beetle, Goliath', 						4800, 			['Classic'] ),
		new Monter( 'Beetle, Goliath Stag', 			6400, 			['Classic'] ),
		new Monter( 'Beetle, Mining', 						200, 				['Classic'] ),
		new Monter( 'Beheaded', 									135, 				['Classic'] ),
		new Monter( 'Behir', 											4800, 			['Classic'] ),
		new Monter( 'Berbalang', 									2400, 			['Classic'] )
	]


