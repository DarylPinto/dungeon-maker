$('#party-level').blur(function(){
	constrainNumberInput(this, dungeon.build_info.min_apl, dungeon.build_info.max_apl);
});

$('#generate-dungeon-btn').click(function(){
	main();
});

$('#difficulty-selection p input').change(function(){
	preventUncheckAllIn('#difficulty-selection');
})

//When the page loads
$(function() {

	//Sometimes page will remember previously checked items on reload
	//so document.ready check is required
	preventUncheckAllIn('#difficulty-selection');

});

//When the window is Resized
$(window).resize(function() {
});

//When the page scrolls
$(window).scroll(function() {
});
