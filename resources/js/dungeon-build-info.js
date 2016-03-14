
var dungeon = new Object();
dungeon.buildInfo = new Object();

//Maximum experience points per challenge rating
//Use challenge rating as index to access values
//ex. dungeon.buildInfo.max_xp_for_cr[6] = 2400
dungeon.buildInfo.max_xp_for_cr = [ 
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

dungeon.buildInfo.biomes = [
	'Basic Biome',
	'Fire Biome',
	'Advanced Biome',
	
]