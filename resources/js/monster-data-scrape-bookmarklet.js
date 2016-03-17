/***************************************

Bookmarklet for collecting monster data
https://docs.google.com/document/d/1d4z_ztfSXV8ZtQddIXO0RVZqA2bN1t3s0LWCU50HzAA/edit?usp=sharing_eid&ts=56e8c6af

***************************************/

//Remove base URL and content after #
function stripURL(str){
	str = str.replace('http://paizo.com/pathfinderRPG/prd/', '');
	return str.slice(0, str.indexOf('#'));
}
var output = '';
$('.stat-block-title').each(function(){
	//Remove span tag inside title (usually contains CR)
	$(this).find('span').remove();
	//Get Monster name, remove anything that looks like a CR value (incase it wasn't in the removed span)
	var monster_name = $(this).text().replace(/CR \d/g, '').trim();
	//get XP value by reading the immediately following paragraph
	var xp = $(this).next('p').text();
	//Only keep XP value if the characters 'XP' were in the paragraph (sometimes they put other stuff here like gold)
	xp = ( xp.toUpperCase().indexOf('XP') > -1 ) ? xp.replace(/\D/g, '') : '';
	//Get URL snippet
	var url = stripURL(location.href);
	//If XP isn't blank, add line to output
	if(xp.length > 0) output += "new Monster('"+monster_name+"', "+xp+", [''], '"+url+"'), \n";
});
//Log output to textarea and select it
$('body').empty().append('<textarea id="output">'+output+'</textarea>');
$('#output').css({
	'font-family' : 'monospace',
	'height' : '95vh',
	'width' : '95vw',
}).select();

var script = document.createElement('script');
script.src = 'http://darylpinto.com/dungeon-maker/resources/js/monster-data-scrape-gui.js';
document.head.appendChild(script);