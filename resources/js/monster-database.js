//Monster Object Constructor
function Monster(name, xp, residing_biomes, bestiary_location){
	this.name = name;
	this.xp = xp;
	this.residing_biomes = residing_biomes;
	this.wiki = 'http://paizo.com/pathfinderRPG/prd/' + bestiary_location + '.html';
}


dungeon.data.monster_db = [

	//          NAME                          XP      Biomes                                                 Bestiary Location
	//******************************************************************************************************************************************
	new Monster('Aasimar',                    200,    ['Light', 'Angelic', 'Orderly', 'Gilded'],             'bestiary/aasimar'),
	new Monster('Abaia',                      9600,   ['Water', 'Beach', 'Eldritch'],                        'bestiary4/abaia'),
	new Monster('Aboleth',                    3200,   ['Water', 'Chaotic', 'Eldritch'],                      'bestiary/aboleth'),
	new Monster('Achaierai',                  1600,   ['Air', 'Shadow', 'Demonic', 'Orderly'],               'bestiary2/achaierai'),
	new Monster('Adaro',                      800,    ['Acidic', 'Beach', 'Water', 'Chaotic'],               'bestiary3/adaro'),
	new Monster('Adherer',                    800,    ['Acidic', 'Earth', 'Plains', 'Void'],                 'bestiary3/adherer'),
	new Monster('Adlet',                      9600,   ['Frosted', 'Mountains', 'Plains'],                    'bestiary3/adlet'),
	new Monster('Akhana',                     19200,  ['Insulated', 'Astral', 'Orderly', 'Spatial'],         'bestiary2/aeon'),
	new Monster('Bythos',                     76800,  ['Insulated', 'Astral', 'Orderly', 'Spatial'],         'bestiary2/aeon'),
	new Monster('Paracletus',                 600,    ['Earth', 'Light', 'Astral', 'Orderly', 'Spatial'],    'bestiary2/aeon'),
	new Monster('Pleroma',                    307200, ['Light', 'Shadow', 'Lunar', 'Spatial'],               'bestiary2/aeon'),
	new Monster('Theletos',                   3200,   ['Earth', 'Insulated', 'Light', 'Orderly', 'Spatial'], 'bestiary2/aeon'),
	new Monster('Avoral',                     6400,   ['Air', 'Angelic', 'Orderly', 'Void'],                 'bestiary2/agathion'),
	new Monster('Cetaceal',                   51200,  ['Water', 'Angelic', 'Orderly', 'Void'],               'bestiary2/agathion'),
	new Monster('Draconal',                   307200, ['Acidic', 'Angelic', 'Draconic', 'Orderly', 'Void'],  'bestiary2/agathion'),
	new Monster('Leonal',                     19200,  ['Plains', 'Sonic', 'Angelic', 'Orderly', 'Void'],     'bestiary2/agathion'),
	new Monster('Silvanshee',                 600,    ['Plains', 'Angelic', 'Orderly', 'Void'],              'bestiary2/agathion'),
	new Monster('Agathion, Vulpinal',         2400,   ['Orange', 'Angelic', 'Orderly', 'Void'],              'bestiary2/agathion'),
	new Monster('Ahuizotl',                   2400,   ['Beach', 'Blue', 'Water', 'Devilish'],                'bestiary3/ahuizotl'),
	new Monster('Akata',                      400,    ['Blue', 'Insulated', 'Chaotic', 'Eldritch', 'Void'],  'bestiary2/akata'),
	new Monster('Akhlut',                     25600,  ['Beach', 'Frosted', 'Water', 'Chaotic'],              'bestiary3/akhlut'),
	new Monster('Allip',                      800,    ['Masterwork', 'Shadow', 'Etheral', 'Void'],           'bestiary3/allip'),
	new Monster('Almiraj',                    400,    ['Forested', 'Mountains', 'Plains', 'Bouncing'],       'bestiary4/almiraj'),
	new Monster('Alpluachra',                 200,    ['Acidic', 'Beach', 'Water', 'Fairy'],                 'bestiary4/alpluachra'),
	new Monster('Alraune',                    25600,  ['Acidic', 'Forested', 'Green', 'Fairy'],              'bestiary3/alraune'),
	new Monster('Amoeba, Giant',              400,    ['Acidic', 'Classic', 'Water', 'Bouncing'],            'bestiary2/amoeba'),
	new Monster('Amoeba Swarm',               400,    ['Acidic', 'Classic', 'Water', 'Bouncing'],            'bestiary2/amoeba'),
	new Monster('Amphisbaena',                1200,   ['Acidic', 'Classic', 'Mountains', 'Shadow'],          'bestiary2/amphisbaena'),
	new Monster('Astral Deva',                38400,  ['Light', 'Masterwork', 'Angelic', 'Gilded'],          'bestiary/angel'),
	new Monster('Planetar',                   76800,  ['Green', 'Masterwork', 'Angelic', 'Gilded'],          'bestiary/angel'),
	new Monster('Solar',                      819200, ['Fire', 'Masterwork', 'Red', 'Angelic'],              'bestiary/angel'),
	new Monster('Cassisian',                  600,    ['Light', 'Angelic', 'Gilded', 'Orderly'],             'bestiary2/angel'),
	new Monster('Monadic Deva',               19200,  ['Light', 'Angelic', 'Gilded', 'Orderly'],             'bestiary2/angel'),
	new Monster('Movanic Deva',               9600,   ['Light', 'Angelic', 'Gilded', 'Orderly'],             'bestiary2/angel'),
	new Monster('Cat Lord',                   12800,  ['Frosted', 'Mountains', 'Plains', 'Urban'],           'bestiary3/animalLord'),
	new Monster('Animate Dream',              4800,   ['Darkness', 'Devilish', 'Etheral', 'Void'],           'bestiary2/animateDream'),
	new Monster('Animated Object',            800,    ['Classic', 'Masterwork', 'Astral', 'Vicordian'],      'bestiary/animatedObject'),
	new Monster('Ankheg',                     800,    ['Acidic', 'Classic', 'Earth', 'Mountains'],           'bestiary/ankheg'),
	new Monster('Ankou',                      38400,  ['Darkness', 'Insulated', 'Etheral', 'Fairy'],         'bestiary4/ankou'),
	new Monster('Giant Ant Lion',             1600,   ['Classic', 'Earth', 'Mountains'],                     'bestiary3/antLion'),
	new Monster('Giant Adult Ant Lion',       2400,   ['Classic', 'Earth', 'Mountains'],                     'bestiary3/antLion'),
	new Monster('Aoandon',                    19200,  ['Shadow', 'Eldritch', 'Etheral', 'Void'],             'bestiary4/aoandon'),
	new Monster('Gorilla',                    600,    ['Frosted', 'Mountains'],                              'bestiary/ape'),
	new Monster('Dire Ape (Gigantopithecus)', 800,    ['Classic', 'Forested', 'Mountains'],                  'bestiary/ape'),
	new Monster('Apocalypse Locust',          2400,   ['Sonic', 'Astral', 'Devilish', 'Void'],               'bestiary4/apocalypseLocust'),
	new Monster('Archaeopteryx',              100,    ['Air', 'Frosted', 'Masterwork', 'Mountains'],         'bestiary4/familiars'),
	new Monster('Dodo',                       100,    ['Earth', 'Forested', 'Mountains'],                    'bestiary4/familiars'),
	new Monster('Platypus',                   65,     ['Beach', 'Masterwork', 'Water'],                      'bestiary4/familiars'),
	new Monster('Sloth',                      65,     ['Earth', 'Forested'],                                 'bestiary4/familiars'),
	new Monster('Tuatara',                    100,    ['Beach', 'Forested', 'Green', 'Plains'],              'bestiary4/familiars'),
	new Monster('Harbinger Archon',           600,    ['Angelic', 'Astral', 'Orderly', 'Temporal'],          'bestiary3/archon'),
	new Monster('Legion Archon',              3200,   ['Fire', 'Angelic', 'Astral', 'Stellar'],              'bestiary3/archon'),
	new Monster('Hound Archon',               1200,   ['Angelic', 'Astral', 'Orderly'],                      'bestiary/archon'),
	new Monster('Lantern Archon',             600,    ['Light', 'Angelic', 'Astral', 'Fairy'],               'bestiary/archon'),
	new Monster('Trumpet Archon',             38400,  ['Sonic', 'Angelic', 'Astral', 'Gilded'],              'bestiary/archon'),
	new Monster('Shield Archon',              9600,   ['Metallic', 'Angelic', 'Astral', 'Orderly'],          'bestiary2/archon'),
	new Monster('Star Archon',                204800, ['Angelic', 'Astral', 'Spatial', 'Stellar'],           'bestiary2/archon'),
	new Monster('Argus',                      25600,  ['Earth', 'Astral', 'Eldritch', 'Vicordian'],          'bestiary4/argus'),
	new Monster('Army Ant Swarm',             1600,   ['Classic', 'Forested', 'Mountains', 'Red'],           'bestiary/ant'),
	new Monster('Giant Ant',                  600,    ['Acidic', 'Classic', 'Mountains', 'Red'],             'bestiary/ant'),
	new Monster('Ascomoid',                   1600,   ['Acidic', 'Forested', 'Yellow', 'Eldritch'],          'bestiary3/ascomoid'),
	new Monster('Assassin Vine',              800,    ['Classic', 'Forested', 'Green'],                      'bestiary/assassinVine'),
	new Monster('Astral Leviathan',           153600, ['Astral', 'Spatial', 'Stellar', 'Temporal'],          'bestiary4/astralLeviathan'),
	new Monster('Adhukait',                   3200,   ['Metallic', 'Devilish', 'Orderly'],                   'bestiary3/asura'),
	new Monster('Aghasura',                   12800,  ['Acidic', 'Devilish', 'Eldritch', 'Orderly'],         'bestiary3/asura'),
	new Monster('Asurendra',                  307200, ['Devilish', 'Gilded', 'Orderly'],                     'bestiary3/asura'),
	new Monster('Tripurasura',                600,    ['Shadow', 'Devilish', 'Orderly'],                     'bestiary3/asura'),
	new Monster('Upasunda',                   6400,   ['Blue', 'Devilish', 'Orderly'],                       'bestiary3/asura'),
	new Monster('Athach',                     19200,  ['Mountains', 'Chaotic', 'Demonic'],                   'bestiary2/athach'),
	new Monster('Atomie',                     400,    ['Green', 'Chaotic', 'Fairy'],                         'bestiary3/atomie'),
	new Monster('Attic Whisperer',            1200,   ['Classic', 'Insulated', 'Shadow', 'Sonic'],           'bestiary2/atticWhisperer'),
	new Monster('Aurumvorax',                 6400,   ['Forested', 'Mountains', 'Plains', 'Yellow'],         'bestiary2/aurumvorax'),
	new Monster('Axe Beak',                   600,    ['Classic', 'Metallic', 'Plains'],                     'bestiary3/axeBeak'),
	new Monster('Axiomite',                   4800,   ['Earth', 'Light', 'Orderly', 'Void'],                 'bestiary2/axiomite'),
	new Monster('Bralani',                    2400,   ['Air', 'Angelic', 'Astral', 'Chaotic'],               'bestiary/azata'),
	new Monster('Ghaele',                     25600,  ['Light', 'Angelic', 'Astral', 'Chaotic'],             'bestiary/azata'),
	new Monster('Lillend',                    3200,   ['Sonic', 'Angelic', 'Astral', 'Chaotic'],             'bestiary/azata'),
	new Monster('Brijidine',                  102400, ['Earth', 'Fire', 'Angelic', 'Astral', 'Chaotic'],     'bestiary2/azata'),
	new Monster('Lyrakien',                   600,    ['Angelic', 'Astral', 'Chaotic', 'Fairy'],             'bestiary2/azata'),

]