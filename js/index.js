$(document).ready(function(){
	
	console.log("Hello from index.js");
	
	// ****** page variables ******
	
	// ****** page interactions ******
	
	$('.flip').hover(function()
	{
    	$(this).find('.card').toggleClass('flipped');
    });
	
	$('.tile').hover( function() 
	{
        $(this).find('.caption').fadeIn(300);
    }, function() 
    {
        $(this).find('.caption').fadeOut(100);
    });
	
});