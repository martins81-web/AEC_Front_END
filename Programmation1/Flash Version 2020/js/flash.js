/*<!-- Jquery exercice flash -->*/
/*<!-- Programmation1 -->*/
/*<!-- par Eric Martins -->*/
/*<!-- Crée le 27 février 2020 -->*/


var flash=$("#flashID");

$("#boutonDroite").click(function() {
    flash.css({
        webkitTransform: "scaleX(1)",
        transform: "scaleX(1)"
    });
    clearTimeout(timeLeft);
    moveRight();
});

$("#boutonGauche").click(function() {
    flash.css({
        webkitTransform: "scaleX(-1)",
        transform: "scaleX(-1)"
    });
    clearTimeout(timeRight);
    moveLeft();
});

$("#boutonBas").click(function() {
    clearTimeout(timeUp);
    moveDown();
});

$("#boutonHaut").click(function() {
    clearTimeout(timeDown);
    moveUp();
});

var timeRight,timeLeft,timeUp,timeDown;

var positionXXFlash=100;

function moveRight() {
    positionXXFlash+=5;
    let pos=positionXXFlash.toString()+"px";

    if(positionXXFlash<screen.width-240) {
        flash.css("left", pos);
        timeRight = setTimeout(moveRight, 1);
    }
}

function moveLeft() {
    positionXXFlash-=5;
    let pos=positionXXFlash.toString()+"px";

    if(positionXXFlash>0){
        flash.css("left",pos);
        timeLeft = setTimeout(moveLeft, 1);
    }
}

var positionYYFlash=0;

function moveUp() {
    positionYYFlash-=5;
    let pos=positionYYFlash.toString()+"px";

    if(positionYYFlash>0){
        flash.css("top",pos);
        timeUp = setTimeout(moveUp, 1);
    }
}

function moveDown() {
    positionYYFlash+=5;
    let pos=positionYYFlash.toString()+"px";

    if(positionYYFlash>=0 && positionYYFlash<440){
        flash.css("top",pos);
        timeDown = setTimeout(moveDown, 1);
    }
}

var image=1;
$( "#boutonChangerImage" ).click(function() {
    image=3-image;
    flash.attr('src','img/Flash'+image.toString()+'.png');
});

$( "#boutonEnleverImage" ).click(function() {
    flash.hide();
});

$( "#boutonAjouterImage" ).click(function() {
    flash.show();
});

$( "#boutonAjouterAttribut" ).click(function() {
    flash.attr("alt",'photo de Flash');
});

$( "#boutonAjouterTitre" ).click(function() {
    $( "body" ).prepend( '<h1>Justice League</h1>' );
});

$( "#boutonDupliquer" ).click(function() {
    flash.clone().appendTo('.col-12');
});

$( "#boutonRalentir" ).click(function() {
    $("#flashID:last").remove();
});

var clic=0;
$( "#boutonTeleport" ).click(function() {
    if(clic===0){
        flash.clone().appendTo('body');
        flash.hide();
    } else {
        flash.show();
        $('body').children('img').last().remove();
    }
    clic=1-clic;
});

$( "#boutonVitesseSupreme" ).click(function() {
    vitesseSupreme=true;
    myLoop();
});

var vitesseTimer;
function myLoop () {
    clearTimeout(vitesseTimer);
    flash.toggle();
    vitesseTimer = setTimeout(myLoop, 500);
}


$( "#boutonFinVitesseSupreme" ).click(function() {
    clearTimeout(vitesseTimer);
    flash.show();
});

$( "#boutonNuke" ).click(function() {
    $(".centralCity").children().hide();
    $(".centralCity").css({'background-image' : 'url(img/nuke.jpg)', 'background-repeat': 'no-repeat'});
});
