
var premierClique=true;
var $img1;
var $img2;
var $imgSrc1;
var $imgSrc2;
var coups=0;

$('.img-fluid').on('click', function() {

    if (premierClique===true) {
        $img1 = $(this);
        $imgSrc1 = $(this).attr('src');
        // $img1.hide();
        $img1.addClass('border border-danger');
        premierClique=false;
    } else{
        $img2 = $(this);
        $imgSrc2 = $(this).attr('src');
        $img2.attr("src", $imgSrc1);
        $img1.attr("src", $imgSrc2);
        // $img1.show();
        $img1.removeClass('border border-danger');
        premierClique=true;
        coups++;

        if (Victoire()){
            addDivVictoire();
            addCoups();
            $("#boutonTricher").attr("disabled", true);
            $('.img-fluid').off('click');
        }
    }

});


$('#boutonRecommencer').click(function() {
    location.reload();
});

$('#boutonTricher').click(function() {
    for (let i=1; i<=9; i++){
        $("#image"+i).attr("src","images/"+i+".jpg");
    }
    addDivVictoire();
    addTricheur();
    $("#boutonTricher").attr("disabled", true);
    $('.img-fluid').off('click');
});


$(".img-fluid").hover(function () {
    if (Victoire()===false) {
        $(this).css('cursor', 'pointer');
    } else{
        $(this).css('cursor', 'default');
    }
});


/**
 * @return {boolean}
 */
function Victoire(){
    let compteur=0;
    for (let i=1; i<=9; i++){
        if ($("#image"+i).attr("src") === "images/"+i+".jpg"){
            compteur++;
        }
    }
    return compteur === 9;
}




function addDivVictoire(){
$('#premiereRangee').before('<div id="victoire"><img class="img-fluid" src="images/victoire.jpg"/></div>');
}

function addCoups(){
    $('#victoire').append("<h1>"+coups+" coups ont été necéssaires pour résoudre le casse-tête.</h1>");
}

function addTricheur(){
    $('#victoire').append("<h1>TRICHEUR</h1>");
}