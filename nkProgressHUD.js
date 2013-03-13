/*!
 * nkProgressHUD - jQuery Plugin
 * version: 1.0 (Wed, 9 Jan 2013)
 * requires jQuery v1.6 or later
 *
 * Example at http://naoufal.com/projects/nkprogresshud/
 * 
 *
 * Copyright 2012 Naoufal Kadhom - naoufalkadhom [at] gmail [dot] com
 *
 */

//displays loader (best used at the beginning of a script)
function showNKProgressHUD(loaderString) {  
	//append html
	$('body').append("<div class='nkProgressHUDPage'><div class='nkProgressHUDWrapper'><div class='nkProgressHUDSpinner'></div><div class='nkProgressHUDText'></div><div class='clear'></div></div></div>");

	// set heights  
	nkProgressHUDWrapperHeight = 270;	
	nkProgressHUDWrapperStart = (windowHeight - nkProgressHUDWrapperHeight) / 2;
	nkProgressHUDWrapperEnd = nkProgressHUDWrapperStart + 50;
	$('.nkProgressHUDWrapper').css('margin-top', nkProgressHUDWrapperEnd);

	$('.nkProgressHUDWrapper').show();
	$('div.nkProgressHUDText').html(loaderString)
	$('.nkProgressHUDWrapper').animate({marginTop: nkProgressHUDWrapperStart,}, {duration: 1000,queue: false});
	$('.nkProgressHUDPage').fadeIn();
};

//changes loader string (best used to inform user of a new task being performed)
function changeNKProgressHUD(loaderString) {  	
	$('div.nkProgressHUDText').html(loaderString)
};

//hides loader (best used at the end of a script)
function dismissNKProgressHUD() {  	
	$('.nkProgressHUDWrapper').animate({marginTop: nkProgressHUDWrapperEnd,}, {duration: 1000,queue: false});
	setTimeout(function() {
		$('.nkProgressHUDPage').fadeOut();
	}, 460);
	$('.nkProgressHUDWrapper').fadeOut();
	//remove html
	setTimeout(function() {
		$('.nkProgressHUDPage').remove();
	}, 1000);	
};

//use demoProgressHUD to simulate loader animation prior to implementing
function demoNKProgressHUD(loaderString) {  	
	showNKProgressHUD(loaderString);
	setTimeout(function() {
		changeNKProgressHUD('Displaying Demo');
	}, 2000);
	setTimeout(function() {
		changeNKProgressHUD('Ending Demo');
	}, 3500);
	setTimeout(function() {
		dismissNKProgressHUD();
	}, 5000);
};
//vertically centers ProgressHUD.
var windowHeight;
var nkProgressHUDWrapperHeight;
var nkProgressHUDWrapperStart;
var nkProgressHUDWrapperEnd;


$(document).ready(function() {
	windowHeight = $(window).height();
});

//resets window height when user resizes window
$(window).resize(function() {
	windowHeight = $(window).height(); 
});
