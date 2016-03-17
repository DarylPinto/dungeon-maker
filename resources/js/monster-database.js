//Monster Object Constructor
function Monster(name, xp, residing_biomes, url_snippet){
	this.name = name;
	this.xp = xp;
	this.residing_biomes = residing_biomes;
	this.url = 'http://paizo.com/pathfinderRPG/prd/' + url_snippet;
}


dungeon.data.monster_db = [

	//          NAME          XP      Biomes                                                 URL snippet
	//***************************************************************************************************************
	new Monster('Aasimar',    200,    ['Light', 'Angelic', 'Orderly', 'Gilded'],             'bestiary/aasimar.html'),
	new Monster('Abaia',      9600,   ['Water', 'Beach', 'Eldritch'],                        'bestiary4/abaia.html'),
	new Monster('Aboleth',    3200,   ['Water', 'Chaotic', 'Eldritch'],                      'bestiary/aboleth.html'),
	new Monster('Achaierai',  1600,   ['Air', 'Shadow', 'Demonic', 'Orderly'],               'bestiary2/achaierai.html'),
	new Monster('Adaro',      800,    ['Acidic', 'Beach', 'Water', 'Chaotic'],               'bestiary3/adaro.html'),
	new Monster('Adherer',    800,    ['Acidic', 'Earth', 'Plains', 'Void'],                 'bestiary3/adherer.html'),
	new Monster('Adlet',      9600,   ['Frosted', 'Mountains', 'Plains'],                    'bestiary3/adlet.html'),
	new Monster('Akhana',     19200,  ['Insulated', 'Astral', 'Orderly', 'Spatial'],         'bestiary2/aeon.html'),
	new Monster('Bythos',     76800,  ['Insulated', 'Astral', 'Orderly', 'Spatial'],         'bestiary2/aeon.html'),
	new Monster('Paracletus', 600,    ['Earth', 'Light', 'Astral', 'Orderly', 'Spatial'],    'bestiary2/aeon.html'),
	new Monster('Pleroma',    307200, ['Light', 'Shadow', 'Lunar', 'Spatial'],               'bestiary2/aeon.html'),
	new Monster('Theletos',   3200,   ['Earth', 'Insulated', 'Light', 'Orderly', 'Spatial'], 'bestiary2/aeon.html'),
]