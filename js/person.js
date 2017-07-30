$(document).ready(function() 
{
	// ** welcome **
	console.log("hello from person");
	
	// ** variables **
	
	// ** auto interactions **
	
	$('#preconception').delay(1800).fadeIn(1000).promise().then(function()
	{
    	return $('#experience1').delay(2000).fadeIn(1000).promise();
	}).then(function()
	{
    	return $('#experience1').delay(2000).fadeOut(1000).promise();
	}).then(function()
	{
    	return $('#experience2').delay(200).fadeIn(1000).promise();
	}).then(function()
	{
		return $('#experience2').delay(2000).fadeOut(1000).promise();
	}).then(function()
	{
		return $('#experience3').delay(200).fadeIn(1000).promise();
	}).then(function()
	{
		return $('#statistic').delay(1800).fadeIn(1000).promise();
	}).then(function()
	{
		return $('#preconception').delay(1800).fadeOut(1000).promise();
	}).then(function()
	{
		return $('#experience3').delay(500).fadeOut(1000).promise();
	}).then(function()
	{
		return $('#storynav').delay(1000).fadeIn(1000).promise();
	})

	
});