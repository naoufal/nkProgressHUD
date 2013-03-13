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
	$('.progressHUDWrapper').show();
	$('div.progressHUDText').html(loaderString)
	$('.progressHUDWrapper').animate({marginTop: progressHUDWrapperStart,}, {duration: 1000,queue: false});
	$('.progressHUDPage').fadeIn();
};

//changes loader string (best used to inform user of a new task being performed)
function changeNKProgressHUD(loaderString) {  	
	$('div.progressHUDText').html(loaderString)
};

//hides loader (best used at the end of a script)
function dismissNKProgressHUD() {  	
	$('.progressHUDWrapper').animate({marginTop: progressHUDWrapperEnd,}, {duration: 1000,queue: false});
	setTimeout(function() {
		$('.progressHUDPage').fadeOut();
	}, 460);
	$('.progressHUDWrapper').fadeOut();

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


var windowHeight = $(window).height();
var progressHUDWrapperHeight = 270;
var progressHUDWrapperStart;
var progressHUDWrapperEnd;

$(document).ready(function() {
	progressHUDWrapperStart = (windowHeight - progressHUDWrapperHeight) / 2;
	progressHUDWrapperEnd = progressHUDWrapperStart + 50;
	$('.progressHUDWrapper').css('margin-top', progressHUDWrapperEnd);
});