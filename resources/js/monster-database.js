/*
https://docs.google.com/document/d/1d4z_ztfSXV8ZtQddIXO0RVZqA2bN1t3s0LWCU50HzAA/edit?usp=sharing_eid&ts=56e8c6af
*/

//Monster Object Constructor
function Monster(name, xp, residing_biomes, bestiary_location){
	this.name = name;
	this.xp = xp;
	this.residing_biomes = residing_biomes;
	this.wiki = 'http://paizo.com/pathfinderRPG/prd/' + bestiary_location + '.html';
}


dungeon.data.monster_db = [

	//          NAME                          XP      Biomes                                 => (There's one more column)                                          Bestiary Location
	//*****************************************************************************************************************************************************************************************
	new Monster('Aasimar',                    200,    ['Light', 'Angelic', 'Orderly', 'Gilded'],                                                                   'bestiary/aasimar'),
	new Monster('Abaia',                      9600,   ['Water', 'Beach', 'Eldritch'],                                                                              'bestiary4/abaia'),
	new Monster('Aboleth',                    3200,   ['Water', 'Chaotic', 'Eldritch'],                                                                            'bestiary/aboleth'),
	new Monster('Achaierai',                  1600,   ['Air', 'Shadow', 'Demonic', 'Orderly'],                                                                     'bestiary2/achaierai'),
	new Monster('Adaro',                      800,    ['Acidic', 'Beach', 'Water', 'Chaotic'],                                                                     'bestiary3/adaro'),
	new Monster('Adherer',                    800,    ['Acidic', 'Earth', 'Plains', 'Void'],                                                                       'bestiary3/adherer'),
	new Monster('Adlet',                      9600,   ['Frosted', 'Mountains', 'Plains'],                                                                          'bestiary3/adlet'),
	new Monster('Akhana',                     19200,  ['Insulated', 'Astral', 'Orderly', 'Spatial'],                                                               'bestiary2/aeon'),
	new Monster('Bythos',                     76800,  ['Insulated', 'Astral', 'Orderly', 'Spatial'],                                                               'bestiary2/aeon'),
	new Monster('Paracletus',                 600,    ['Earth', 'Light', 'Astral', 'Orderly', 'Spatial'],                                                          'bestiary2/aeon'),
	new Monster('Pleroma',                    307200, ['Light', 'Shadow', 'Lunar', 'Spatial'],                                                                     'bestiary2/aeon'),
	new Monster('Theletos',                   3200,   ['Earth', 'Insulated', 'Light', 'Orderly', 'Spatial'],                                                       'bestiary2/aeon'),
	new Monster('Avoral',                     6400,   ['Air', 'Angelic', 'Orderly', 'Void'],                                                                       'bestiary2/agathion'),
	new Monster('Cetaceal',                   51200,  ['Water', 'Angelic', 'Orderly', 'Void'],                                                                     'bestiary2/agathion'),
	new Monster('Draconal',                   307200, ['Acidic', 'Angelic', 'Draconic', 'Orderly', 'Void'],                                                        'bestiary2/agathion'),
	new Monster('Leonal',                     19200,  ['Plains', 'Sonic', 'Angelic', 'Orderly', 'Void'],                                                           'bestiary2/agathion'),
	new Monster('Silvanshee',                 600,    ['Plains', 'Angelic', 'Orderly', 'Void'],                                                                    'bestiary2/agathion'),
	new Monster('Agathion, Vulpinal',         2400,   ['Orange', 'Angelic', 'Orderly', 'Void'],                                                                    'bestiary2/agathion'),
	new Monster('Ahuizotl',                   2400,   ['Beach', 'Blue', 'Water', 'Devilish'],                                                                      'bestiary3/ahuizotl'),
	new Monster('Akata',                      400,    ['Blue', 'Insulated', 'Chaotic', 'Eldritch', 'Void'],                                                        'bestiary2/akata'),
	new Monster('Akhlut',                     25600,  ['Beach', 'Frosted', 'Water', 'Chaotic'],                                                                    'bestiary3/akhlut'),
	new Monster('Allip',                      800,    ['Masterwork', 'Shadow', 'Etheral', 'Void'],                                                                 'bestiary3/allip'),
	new Monster('Almiraj',                    400,    ['Forested', 'Mountains', 'Plains', 'Bouncing'],                                                             'bestiary4/almiraj'),
	new Monster('Alpluachra',                 200,    ['Acidic', 'Beach', 'Water', 'Fairy'],                                                                       'bestiary4/alpluachra'),
	new Monster('Alraune',                    25600,  ['Acidic', 'Forested', 'Green', 'Fairy'],                                                                    'bestiary3/alraune'),
	new Monster('Amoeba, Giant',              400,    ['Acidic', 'Classic', 'Water', 'Bouncing'],                                                                  'bestiary2/amoeba'),
	new Monster('Amoeba Swarm',               400,    ['Acidic', 'Classic', 'Water', 'Bouncing'],                                                                  'bestiary2/amoeba'),
	new Monster('Amphisbaena',                1200,   ['Acidic', 'Classic', 'Mountains', 'Shadow'],                                                                'bestiary2/amphisbaena'),
	new Monster('Astral Deva',                38400,  ['Light', 'Masterwork', 'Angelic', 'Gilded'],                                                                'bestiary/angel'),
	new Monster('Planetar',                   76800,  ['Green', 'Masterwork', 'Angelic', 'Gilded'],                                                                'bestiary/angel'),
	new Monster('Solar',                      819200, ['Fire', 'Masterwork', 'Red', 'Angelic'],                                                                    'bestiary/angel'),
	new Monster('Cassisian',                  600,    ['Light', 'Angelic', 'Gilded', 'Orderly'],                                                                   'bestiary2/angel'),
	new Monster('Monadic Deva',               19200,  ['Light', 'Angelic', 'Gilded', 'Orderly'],                                                                   'bestiary2/angel'),
	new Monster('Movanic Deva',               9600,   ['Light', 'Angelic', 'Gilded', 'Orderly'],                                                                   'bestiary2/angel'),
	new Monster('Cat Lord',                   12800,  ['Frosted', 'Mountains', 'Plains', 'Urban'],                                                                 'bestiary3/animalLord'),
	new Monster('Animate Dream',              4800,   ['Darkness', 'Devilish', 'Etheral', 'Void'],                                                                 'bestiary2/animateDream'),
	new Monster('Animated Object',            800,    ['Classic', 'Masterwork', 'Astral', 'Vicordian'],                                                            'bestiary/animatedObject'),
	new Monster('Ankheg',                     800,    ['Acidic', 'Classic', 'Earth', 'Mountains'],                                                                 'bestiary/ankheg'),
	new Monster('Ankou',                      38400,  ['Darkness', 'Insulated', 'Etheral', 'Fairy'],                                                               'bestiary4/ankou'),
	new Monster('Giant Ant Lion',             1600,   ['Classic', 'Earth', 'Mountains'],                                                                           'bestiary3/antLion'),
	new Monster('Giant Adult Ant Lion',       2400,   ['Classic', 'Earth', 'Mountains'],                                                                           'bestiary3/antLion'),
	new Monster('Aoandon',                    19200,  ['Shadow', 'Eldritch', 'Etheral', 'Void'],                                                                   'bestiary4/aoandon'),
	new Monster('Gorilla',                    600,    ['Frosted', 'Mountains'],                                                                                    'bestiary/ape'),
	new Monster('Dire Ape (Gigantopithecus)', 800,    ['Classic', 'Forested', 'Mountains'],                                                                        'bestiary/ape'),
	new Monster('Apocalypse Locust',          2400,   ['Sonic', 'Astral', 'Devilish', 'Void'],                                                                     'bestiary4/apocalypseLocust'),
	new Monster('Archaeopteryx',              100,    ['Air', 'Frosted', 'Masterwork', 'Mountains'],                                                               'bestiary4/familiars'),
	new Monster('Dodo',                       100,    ['Earth', 'Forested', 'Mountains'],                                                                          'bestiary4/familiars'),
	new Monster('Platypus',                   65,     ['Beach', 'Masterwork', 'Water'],                                                                            'bestiary4/familiars'),
	new Monster('Sloth',                      65,     ['Earth', 'Forested'],                                                                                       'bestiary4/familiars'),
	new Monster('Tuatara',                    100,    ['Beach', 'Forested', 'Green', 'Plains'],                                                                    'bestiary4/familiars'),
	new Monster('Harbinger Archon',           600,    ['Angelic', 'Astral', 'Orderly', 'Temporal'],                                                                'bestiary3/archon'),
	new Monster('Legion Archon',              3200,   ['Fire', 'Angelic', 'Astral', 'Stellar'],                                                                    'bestiary3/archon'),
	new Monster('Hound Archon',               1200,   ['Angelic', 'Astral', 'Orderly'],                                                                            'bestiary/archon'),
	new Monster('Lantern Archon',             600,    ['Light', 'Angelic', 'Astral', 'Fairy'],                                                                     'bestiary/archon'),
	new Monster('Trumpet Archon',             38400,  ['Sonic', 'Angelic', 'Astral', 'Gilded'],                                                                    'bestiary/archon'),
	new Monster('Shield Archon',              9600,   ['Metallic', 'Angelic', 'Astral', 'Orderly'],                                                                'bestiary2/archon'),
	new Monster('Star Archon',                204800, ['Angelic', 'Astral', 'Spatial', 'Stellar'],                                                                 'bestiary2/archon'),
	new Monster('Argus',                      25600,  ['Earth', 'Astral', 'Eldritch', 'Vicordian'],                                                                'bestiary4/argus'),
	new Monster('Army Ant Swarm',             1600,   ['Classic', 'Forested', 'Mountains', 'Red'],                                                                 'bestiary/ant'),
	new Monster('Giant Ant',                  600,    ['Acidic', 'Classic', 'Mountains', 'Red'],                                                                   'bestiary/ant'),
	new Monster('Ascomoid',                   1600,   ['Acidic', 'Forested', 'Yellow', 'Eldritch'],                                                                'bestiary3/ascomoid'),
	new Monster('Assassin Vine',              800,    ['Classic', 'Forested', 'Green'],                                                                            'bestiary/assassinVine'),
	new Monster('Astral Leviathan',           153600, ['Astral', 'Spatial', 'Stellar', 'Temporal'],                                                                'bestiary4/astralLeviathan'),
	new Monster('Adhukait',                   3200,   ['Metallic', 'Devilish', 'Orderly'],                                                                         'bestiary3/asura'),
	new Monster('Aghasura',                   12800,  ['Acidic', 'Devilish', 'Eldritch', 'Orderly'],                                                               'bestiary3/asura'),
	new Monster('Asurendra',                  307200, ['Devilish', 'Gilded', 'Orderly'],                                                                           'bestiary3/asura'),
	new Monster('Tripurasura',                600,    ['Shadow', 'Devilish', 'Orderly'],                                                                           'bestiary3/asura'),
	new Monster('Upasunda',                   6400,   ['Blue', 'Devilish', 'Orderly'],                                                                             'bestiary3/asura'),
	new Monster('Athach',                     19200,  ['Mountains', 'Chaotic', 'Demonic'],                                                                         'bestiary2/athach'),
	new Monster('Atomie',                     400,    ['Green', 'Chaotic', 'Fairy'],                                                                               'bestiary3/atomie'),
	new Monster('Attic Whisperer',            1200,   ['Classic', 'Insulated', 'Shadow', 'Sonic'],                                                                 'bestiary2/atticWhisperer'),
	new Monster('Aurumvorax',                 6400,   ['Forested', 'Mountains', 'Plains', 'Yellow'],                                                               'bestiary2/aurumvorax'),
	new Monster('Axe Beak',                   600,    ['Classic', 'Metallic', 'Plains'],                                                                           'bestiary3/axeBeak'),
	new Monster('Axiomite',                   4800,   ['Earth', 'Light', 'Orderly', 'Void'],                                                                       'bestiary2/axiomite'),
	new Monster('Bralani',                    2400,   ['Air', 'Angelic', 'Astral', 'Chaotic'],                                                                     'bestiary/azata'),
	new Monster('Ghaele',                     25600,  ['Light', 'Angelic', 'Astral', 'Chaotic'],                                                                   'bestiary/azata'),
	new Monster('Lillend',                    3200,   ['Sonic', 'Angelic', 'Astral', 'Chaotic'],                                                                   'bestiary/azata'),
	new Monster('Brijidine',                  102400, ['Earth', 'Fire', 'Angelic', 'Astral', 'Chaotic'],                                                           'bestiary2/azata'),
	new Monster('Lyrakien',                   600,    ['Angelic', 'Astral', 'Chaotic', 'Fairy'],                                                                   'bestiary2/azata'),

	new Monster('Young Black Dragon',         3200,   ['Acidic', 'Masterwork', 'Shadow', 'Chaotic', 'Draconic'],                                                   'bestiary/dragon'),
	new Monster('Adult Black Dragon',         12800,  ['Acidic', 'Masterwork', 'Shadow', 'Chaotic', 'Draconic'],                                                   'bestiary/dragon'),
	new Monster('Ancient Black Dragon',       76800,  ['Acidic', 'Masterwork', 'Shadow', 'Chaotic', 'Draconic'],                                                   'bestiary/dragon'),
	new Monster('Young Blue Dragon',          6400,   ['Blue', 'Electric', 'Draconic', 'Orderly'],                                                                 'bestiary/dragon'),
	new Monster('Adult Blue Dragon',          25600,  ['Blue', 'Electric', 'Draconic', 'Orderly'],                                                                 'bestiary/dragon'),
	new Monster('Ancient Blue Dragon',        153600, ['Blue', 'Electric', 'Draconic', 'Orderly'],                                                                 'bestiary/dragon'),
	new Monster('Young Green Dragon',         4800,   ['Acidic', 'Air', 'Forested', 'Green', 'Draconic'],                                                          'bestiary/dragon'),
	new Monster('Adult Green Dragon',         19200,  ['Acidic', 'Air', 'Forested', 'Green', 'Draconic'],                                                          'bestiary/dragon'),
	new Monster('Ancient Green Dragon',       102400, ['Acidic', 'Air', 'Forested', 'Green', 'Draconic'],                                                          'bestiary/dragon'),
	new Monster('Young Red Dragon',           9600,   ['Classic', 'Fire', 'Red', 'Chaotic', 'Draconic'],                                                           'bestiary/dragon'),
	new Monster('Adult Red Dragon',           38400,  ['Classic', 'Fire', 'Red', 'Chaotic', 'Draconic'],                                                           'bestiary/dragon'),
	new Monster('Ancient Red Dragon',         204800, ['Classic', 'Fire', 'Red', 'Chaotic', 'Draconic'],                                                           'bestiary/dragon'),
	new Monster('Young White Dragon',         2400,   ['Frosted', 'Chaotic', 'Draconic'],                                                                          'bestiary/dragon'),
	new Monster('Adult White Dragon',         9600,   ['Frosted', 'Chaotic', 'Draconic'],                                                                          'bestiary/dragon'),
	new Monster('Ancient White Dragon',       51200,  ['Frosted', 'Chaotic', 'Draconic'],                                                                          'bestiary/dragon'),
	new Monster('Young Brass Dragon',         3200,   ['Earth', 'Fire', 'Metallic', 'Draconic'],                                                                   'bestiary/dragon'),
	new Monster('Adult Brass Dragon',         12800,  ['Earth', 'Fire', 'Metallic', 'Draconic'],                                                                   'bestiary/dragon'),
	new Monster('Ancient Brass Dragon',       76800,  ['Earth', 'Fire', 'Metallic', 'Draconic'],                                                                   'bestiary/dragon'),
	new Monster('Young Bronze Dragon',        6400,   ['Electric', 'Metallic', 'Water', 'Draconic'],                                                               'bestiary/dragon'),
	new Monster('Adult Bronze Dragon',        25600,  ['Electric', 'Metallic', 'Water', 'Draconic'],                                                               'bestiary/dragon'),
	new Monster('Ancient Bronze Dragon',      153600, ['Electric', 'Metallic', 'Water', 'Draconic'],                                                               'bestiary/dragon'),
	new Monster('Young Copper Dragon',        4800,   ['Acidic', 'Earth', 'Metallic', 'Draconic'],                                                                 'bestiary/dragon'),
	new Monster('Adult Copper Dragon',        19200,  ['Acidic', 'Earth', 'Metallic', 'Draconic'],                                                                 'bestiary/dragon'),
	new Monster('Ancient Copper Dragon',      102400, ['Acidic', 'Earth', 'Metallic', 'Draconic'],                                                                 'bestiary/dragon'),
	new Monster('Young Gold Dragon',          12800,  ['Fire', 'Light', 'Metallic', 'Draconic', 'Gilded', 'Stellar'],                                              'bestiary/dragon'),
	new Monster('Adult Gold Dragon',          51200,  ['Fire', 'Light', 'Metallic', 'Draconic', 'Gilded', 'Stellar'],                                              'bestiary/dragon'),
	new Monster('Ancient Gold Dragon',        307200, ['Fire', 'Light', 'Metallic', 'Draconic', 'Gilded', 'Stellar'],                                              'bestiary/dragon'),
	new Monster('Young Silver Dragon',        9600,   ['Frosted', 'Metallic', 'Draconic', 'Gilded', 'Lunar'],                                                      'bestiary/dragon'),
	new Monster('Adult Silver Dragon',        38400,  ['Frosted', 'Metallic', 'Draconic', 'Gilded', 'Lunar'],                                                      'bestiary/dragon'),
	new Monster('Ancient Silver Dragon',      204800, ['Frosted', 'Metallic', 'Draconic', 'Gilded', 'Lunar'],                                                      'bestiary/dragon'),
	new Monster('Young Forest Dragon',        9600,   ['Earth', 'Forested', 'Green', 'Draconic', 'Orderly'],                                                       'bestiary3/dragon'),
	new Monster('Adult Forest Dragon',        38400,  ['Earth', 'Forested', 'Green', 'Draconic', 'Orderly'],                                                       'bestiary3/dragon'),
	new Monster('Ancient Forest Dragon',      204800, ['Earth', 'Forested', 'Green', 'Draconic', 'Orderly'],                                                       'bestiary3/dragon'),
	new Monster('Young Sea Dragon',           4800,   ['Beach', 'Blue', 'Water', 'Draconic', 'Orderly'],                                                           'bestiary3/dragon'),
	new Monster('Adult Sea Dragon',           19200,  ['Beach', 'Blue', 'Water', 'Draconic', 'Orderly'],                                                           'bestiary3/dragon'),
	new Monster('Ancient Sea Dragon',         102400, ['Beach', 'Blue', 'Water', 'Draconic', 'Orderly'],                                                           'bestiary3/dragon'),
	new Monster('Young Sky Dragon',           6400,   ['Air', 'Draconic', 'Spatial', 'Stellar', 'Temporal'],                                                       'bestiary3/dragon'),
	new Monster('Adult Sky Dragon',           25600,  ['Air', 'Draconic', 'Spatial', 'Stellar', 'Temporal'],                                                       'bestiary3/dragon'),
	new Monster('Ancient Sky Dragon',         153600, ['Air', 'Draconic', 'Spatial', 'Stellar', 'Temporal'],                                                       'bestiary3/dragon'),
	new Monster('Young Sovereign Dragon',     12800,  ['Masterwork', 'Metallic', 'Draconic', 'Gilded', 'Orderly', 'Stellar'],                                      'bestiary3/dragon'),
	new Monster('Adult Sovereign Dragon',     51200,  ['Masterwork', 'Metallic', 'Draconic', 'Gilded', 'Orderly', 'Stellar'],                                      'bestiary3/dragon'),
	new Monster('Ancient Sovereign Dragon',   307200, ['Masterwork', 'Metallic', 'Draconic', 'Gilded', 'Orderly', 'Stellar'],                                      'bestiary3/dragon'),
	new Monster('Young Underworld Dragon',    3200,   ['Darkness', 'Earth', 'Fire', 'Draconic'],                                                                   'bestiary3/dragon'),
	new Monster('Adult Underworld Dragon',    12800,  ['Darkness', 'Earth', 'Fire', 'Draconic'],                                                                   'bestiary3/dragon'),
	new Monster('Ancient Underworld Dragon',  76800,  ['Darkness', 'Earth', 'Fire', 'Draconic'],                                                                   'bestiary3/dragon'),
	new Monster('Young Brine Dragon',         3200,   ['Water', 'Astral', 'Draconic', 'Orderly'],                                                                  'bestiary2/dragon'),
	new Monster('Adult Brine Dragon',         12800,  ['Water', 'Astral', 'Draconic', 'Orderly'],                                                                  'bestiary2/dragon'),
	new Monster('Ancient Brine Dragon',       76800,  ['Water', 'Astral', 'Draconic', 'Orderly'],                                                                  'bestiary2/dragon'),
	new Monster('Young Cloud Dragon',         6400,   ['Air', 'Electric', 'Astral', 'Draconic', 'Etheral'],                                                        'bestiary2/dragon'),
	new Monster('Adult Cloud Dragon',         25600,  ['Air', 'Electric', 'Astral', 'Draconic', 'Etheral'],                                                        'bestiary2/dragon'),
	new Monster('Ancient Cloud Dragon',       153600, ['Air', 'Electric', 'Astral', 'Draconic', 'Etheral'],                                                        'bestiary2/dragon'),
	new Monster('Young Crystal Dragon',       2400,   ['Blue', 'Earth', 'Green', 'Light', 'Mountains', 'Orange', 'Red', 'Violet', 'Yellow', 'Draconic', 'Gilded'], 'bestiary2/dragon'),
	new Monster('Adult Crystal Dragon',       9600,   ['Blue', 'Earth', 'Green', 'Light', 'Mountains', 'Orange', 'Red', 'Violet', 'Yellow', 'Draconic', 'Gilded'], 'bestiary2/dragon'),
	new Monster('Ancient Crystal Dragon',     51200,  ['Blue', 'Earth', 'Green', 'Light', 'Mountains', 'Orange', 'Red', 'Violet', 'Yellow', 'Draconic', 'Gilded'], 'bestiary2/dragon'),
	new Monster('Young Magma Dragon',         4800,   ['Earth', 'Fire', 'Mountains', 'Orange', 'Red', 'Draconic', 'Plasma'],                                       'bestiary2/dragon'),
	new Monster('Adult Magma Dragon',         19200,  ['Earth', 'Fire', 'Mountains', 'Orange', 'Red', 'Draconic', 'Plasma'],                                       'bestiary2/dragon'),
	new Monster('Ancient Magma Dragon',       102400, ['Earth', 'Fire', 'Mountains', 'Orange', 'Red', 'Draconic', 'Plasma'],                                       'bestiary2/dragon'),
	new Monster('Young Umbral Dragon',        9600,   ['Darkness', 'Insulated', 'Shadow', 'Draconic', 'Void'],                                                     'bestiary2/dragon'),
	new Monster('Adult Umbral Dragon',        38400,  ['Darkness', 'Insulated', 'Shadow', 'Draconic', 'Void'],                                                     'bestiary2/dragon'),
	new Monster('Ancient Umbral Dragon',      204800, ['Darkness', 'Insulated', 'Shadow', 'Draconic', 'Void'],                                                     'bestiary2/dragon'),
	new Monster('Young Lunar Dragon',         6400,   ['Light', 'Water', 'Astral', 'Draconic', 'Lunar', 'Spatial'],                                                'bestiary4/dragon'),
	new Monster('Adult Lunar Dragon',         25600,  ['Light', 'Water', 'Astral', 'Draconic', 'Lunar', 'Spatial'],                                                'bestiary4/dragon'),
	new Monster('Ancient Lunar Dragon',       153600, ['Light', 'Water', 'Astral', 'Draconic', 'Lunar', 'Spatial'],                                                'bestiary4/dragon'),
	new Monster('Young Solar Dragon',         6400,   ['Fire', 'Light', 'Astral', 'Draconic', 'Plasma', 'Spatial', 'Stellar'],                                     'bestiary4/dragon'),
	new Monster('Adult Solar Dragon',         25600,  ['Fire', 'Light', 'Astral', 'Draconic', 'Plasma', 'Spatial', 'Stellar'],                                     'bestiary4/dragon'),
	new Monster('Ancient Solar Dragon',       153600, ['Fire', 'Light', 'Astral', 'Draconic', 'Plasma', 'Spatial', 'Stellar'],                                     'bestiary4/dragon'),
	new Monster('Young Time Dragon',          12800,  ['Astral', 'Chaotic', 'Draconic', 'Orderly', 'Temporal', 'Void'],                                            'bestiary4/dragon'),
	new Monster('Adult Time Dragon',          51200,  ['Astral', 'Chaotic', 'Draconic', 'Orderly', 'Temporal', 'Void'],                                            'bestiary4/dragon'),
	new Monster('Ancient Time Dragon',        307200, ['Astral', 'Chaotic', 'Draconic', 'Orderly', 'Temporal', 'Void'],                                            'bestiary4/dragon'),
	new Monster('Young Void Dragon',          6400,   ['Darkness', 'Insulated', 'Light', 'Astral', 'Draconic', 'Etheral', 'Orderly', 'Vicordian', 'Void'],         'bestiary4/dragon'),
	new Monster('Adult Void Dragon',          25600,  ['Darkness', 'Insulated', 'Light', 'Astral', 'Draconic', 'Etheral', 'Orderly', 'Vicordian', 'Void'],         'bestiary4/dragon'),
	new Monster('Ancient Void Dragon',        153600, ['Darkness', 'Insulated', 'Light', 'Astral', 'Draconic', 'Etheral', 'Orderly', 'Vicordian', 'Void'],         'bestiary4/dragon'),
	new Monster('Young Vortex Dragon',        9600,   ['Sonic', 'Astral', 'Chaotic', 'Draconic', 'Spatial', 'Void'],                                               'bestiary4/dragon'),
	new Monster('Adult Vortex Dragon',        38400,  ['Sonic', 'Astral', 'Chaotic', 'Draconic', 'Spatial', 'Void'],                                               'bestiary4/dragon'),
	new Monster('Ancient Vortex Dragon',      204800, ['Sonic', 'Astral', 'Chaotic', 'Draconic', 'Spatial', 'Void'],                                               'bestiary4/dragon'),

]