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

var windowHeight;
var nkProgressHUDWrapperHeight;
var nkProgressHUDWrapperStart;
var nkProgressHUDWrapperEnd;

//default string is 'Loading'
function showNKProgressHUD(loaderString) {  
	//append html
	$('body').append("<div class='nkProgressHUDPage'><div class='nkProgressHUDWrapper'><div class='nkProgressHUDSpinner'></div><div class='nkProgressHUDText'>Loading</div><div class='clear'></div></div></div>");

	// set heights to vertically align HUD
	nkProgressHUDWrapperHeight = $('.nkProgressHUDWrapper').height();	
	nkProgressHUDWrapperStart = ((windowHeight - nkProgressHUDWrapperHeight) / 2) - ((windowHeight / 100) * 5);
	nkProgressHUDWrapperEnd = nkProgressHUDWrapperStart + 50;
	$('.nkProgressHUDWrapper').css('margin-top', nkProgressHUDWrapperEnd);

	//start animation
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
		changeNKProgressHUD('Modify Message');
	}, 2000);
	setTimeout(function() {
		changeNKProgressHUD('Dismiss HUD');
	}, 3500);
	setTimeout(function() {
		dismissNKProgressHUD();
	}, 5000);
};

$(document).ready(function() {
	windowHeight = $(window).height();
});

//resets window height when user resizes window
$(window).resize(function() {
	windowHeight = $(window).height(); 
});
