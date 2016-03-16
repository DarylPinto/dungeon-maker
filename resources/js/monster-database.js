//Monster Object Constructor
function Monster(name, xp, residing_biomes, url_snippet){
	this.name = name;
	this.xp = xp;
	this.residing_biomes = residing_biomes;
	this.url = 'http://paizo.com/pathfinderRPG/prd/' + url_snippet;
}


dungeon.data.monster_db = [

	//           NAME                          XP      Biomes
	//***************************************************************
	new Monster('Almiraj',                     400,    ['Classic'] ),
	new Monster('Amoeba Swarm',                400,    ['Classic'] ),
	new Monster('Amphisbaena',                 1200,   ['Classic'] ),
	new Monster('Ankheg',                      800,    ['Classic'] ),
	new Monster('Ant Lion, Giant',             1600,   ['Classic'] ),
	new Monster('Ant Lion, Giant Adult',       2400,   ['Classic'] ),
	new Monster('Ant, Giant (Drone)',          600,    ['Classic'] ),
	new Monster('Ant, Giant (Queen)',          800,    ['Classic'] ),
	new Monster('Ant, Giant (Soldier)',        700,    ['Classic'] ),
	new Monster('Ant, Giant (Worker)',         400,    ['Classic'] ),
	new Monster('Army Ant Swarm',              1600,   ['Classic'] ),
	new Monster('Attic Whisperer',             1200,   ['Classic'] ),
	new Monster('Aurumvorax',                  6400,   ['Classic'] ),
	new Monster('Baku',                        4800,   ['Classic'] ),
	new Monster('Bandersnatch',                102400, ['Classic'] ),
	new Monster('Bandersnatch, Confounding',   153600, ['Classic'] ),
	new Monster('Bandersnatch, Frumious',      204800, ['Classic'] ),
	new Monster('Bandersnatch, Lesser',        25600,  ['Classic'] ),
	new Monster('Bandersnatch, Magicbane',     307200, ['Classic'] ),
	new Monster('Basilisk',                    1600,   ['Classic'] ),
	new Monster('Bat, Mobat',                  800,    ['Classic'] ),
	new Monster('Bat, Skaveling',              1600,   ['Classic'] ),
	new Monster('Baykok',                      6400,   ['Classic'] ),
	new Monster('Bee, Giant',                  400,    ['Classic'] ),
	new Monster('Bee, Giant Bumblebee',        600,    ['Classic'] ),
	new Monster('Bee, Giant Queen',            1600,   ['Classic'] ),
	new Monster('Beetle, Bombardier',          600,    ['Classic'] ),
	new Monster('Beetle, Fire',                135,    ['Classic'] ),
	new Monster('Beetle, Flash',               200,    ['Classic'] ),
	new Monster('Beetle, Giant Stag',          1200,   ['Classic'] ),
	new Monster('Beetle, Goliath',             4800,   ['Classic'] ),
	new Monster('Beetle, Goliath Stag',        6400,   ['Classic'] ),
	new Monster('Beetle, Mining',              200,    ['Classic'] ),
	new Monster('Beheaded',                    135,    ['Classic'] ),
	new Monster('Behir',                       4800,   ['Classic'] ),
	new Monster('Berbalang',                   2400,   ['Classic'] ),
]