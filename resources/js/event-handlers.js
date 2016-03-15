$('#generate-dungeon-btn').click(function(){
	main();
});

$('#difficulty-selection p input').change(function(){
	preventLastOptionFromUncheck();
})

//When the page loads
$(function() {

	//Sometimes page will remember previously checked items on reload
	//so it's necessary to check for this on load.
	preventLastOptionFromUncheck();

});

//When the window is Resized
$(window).resize(function() {
});

//When the page scrolls
$(window).scroll(function() {
});
