NKProgressHUD
=============

NKProgressHUD is a web HUD to preoccupy users during server-side tasks.

![NKProgressHUD](http://kadhom.com/NKProgressHUD/images/nk-progress-hud-screen-1.png)

How to use
----------

To get started load files in the `head` section of your HTML document. Make sure you also add the jQuery library.

    <head>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
        <link rel="stylesheet" href="/NKProgressHUD/nk-progress-hud.css" type="text/css" media="screen" />
        <script type="text/javascript" src="/NKProgressHUD/nk-progress-hud.css"></script>
    </head>

Insert the following markup after the `body` section of your HTML document.

    <div class="progressHUDPage">
        <div class="progressHUDWrapper">
            <div class="progressHUDSpinner">
            <div class="progressHUDText">
            <div class="clear"></div>
        </div>
    </div> 

### Display the HUD

You can display the HUD by initializing NKPRogressHUD like this:

    showNKProgressHUD(loaderString);

You can display whatever text you want by replace `loaderString' with whatever you want to display to the user.

    showNKProgressHUD('Text to Display');

### Changing the HUD Text

You can change the dispalyed text at anything during your script with the following:

    changeNKProgressHUD('New Text');

##Dismissing the HUD

You can dismiss the HUD by adding the following to the end of your script:

    dismissNKProgressHUD();


## Credits

NKProgressHUD is brought to you by [Naoufal Kadhom](http://github.com/naoufal). The spinner icon was generated over at [Preloaders](http://preloaders.net/). NKPRogressHUD is inspired by [Sam Vermette](http://samvermette.com)'s [SVProgressBar](https://github.com/samvermette/SVProgressHUD).
