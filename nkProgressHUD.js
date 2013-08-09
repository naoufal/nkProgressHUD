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



// Declare Namespace
var nkProgressHUD = {};



// Declare Variables
nkProgressHUD.Variables = {
	globalVars: {windowHeight: null},
	properties: {
		height: null,
		start: null,
		end: null
	}
};

//Shows HUD (Default string is 'Loading')
nkProgressHUD.show = function(loaderString){
	//append html
	$('body').append("<div class='nkProgressHUDPage'><div class='nkProgressHUDWrapper'><div class='nkProgressHUDSpinner'></div><div class='nkProgressHUDText'>Loading</div></div></div>");

	// set heights to vertically align HUD
	nkProgressHUD.Variables.properties.height = $('.nkProgressHUDWrapper').height();	
	nkProgressHUD.Variables.properties.start = ((nkProgressHUD.Variables.globalVars.windowHeight - nkProgressHUD.Variables.properties.height) / 2) - ((nkProgressHUD.Variables.globalVars.windowHeight / 100) * 5);
	nkProgressHUD.Variables.properties.end = nkProgressHUD.Variables.properties.start + 50;
	
	if (Modernizr.csstransforms3d){
		$('.nkProgressHUDWrapper').css('transform', 'translate3d(0px, ' + (nkProgressHUD.Variables.properties.start + 30) + 'px, 0)');	
		//start animation
		$('.nkProgressHUDWrapper').show();
		$('div.nkProgressHUDText').html(loaderString)
		$('.nkProgressHUDPage').addClass('animate').css({'opacity': 1,});	
		$('.nkProgressHUDWrapper').addClass('animate-1000ms').css('transform', 'translate3d(0px, ' + (nkProgressHUD.Variables.properties.start - 20) + 'px, 0)');	
	    $('.nkProgressHUDWrapper').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){ 
			$(this).removeClass('animate-1000ms');    
	    });   
	} else {
		$('.nkProgressHUDWrapper').css('margin-top', nkProgressHUD.Variables.properties.end);
		//start animation
		$('.nkProgressHUDWrapper').show();
		$('div.nkProgressHUDText').html(loaderString)
		$('.nkProgressHUDWrapper').animate({marginTop: nkProgressHUD.Variables.properties.start}, {duration: 1000,queue: false});
		$('.nkProgressHUDPage').fadeIn();		
	}		
};



//Changes HUD String (best used to inform user of a new task being performed)
nkProgressHUD.change = function(loaderString){
	$('div.nkProgressHUDText').html(loaderString)
};



//Hides HUD (Best used at the end of a script)
nkProgressHUD.dismiss = function(){
	if (Modernizr.csstransforms3d){
		$('.nkProgressHUDWrapper').addClass('animate-1000ms').css('transform', 'translate3d(0px, ' + (nkProgressHUD.Variables.properties.start + 20) + 'px, 0)').css('opacity', 0);	
		setTimeout(function() {
			$('.nkProgressHUDPage').css('opacity', 0);
		}, 300);
		//remove html
		setTimeout(function() {
			$('.nkProgressHUDPage').remove();
		}, 1000);	
	} else {
		$('.nkProgressHUDWrapper').animate({marginTop: nkProgressHUD.Variables.properties.end,}, {duration: 1000,queue: false});
		setTimeout(function() {
			$('.nkProgressHUDPage').fadeOut();
		}, 460);
		$('.nkProgressHUDWrapper').fadeOut();
		//remove html
		setTimeout(function() {
			$('.nkProgressHUDPage').remove();
		}, 1000);	
	}  	
};


//set windowHeight on load and resize.
(function(){
	nkProgressHUD.Variables.globalVars.windowHeight = $(window).height();
	//resets window height when user resizes window
	$(window).resize(function() {
		nkProgressHUD.Variables.globalVars.windowHeight = $(window).height(); 
	});
}());