
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
        $img1.hide();
        premierClique=false;
    } else{
        $img2 = $(this);
        $imgSrc2 = $(this).attr('src');
        $img2.attr("src", $imgSrc1);
        $img1.attr("src", $imgSrc2);
        $img1.show();
        premierClique=true;
        coups++;

        if (Victoire()){
            addDivVictoire();
            addCoups();
            $("#boutonTricher").attr("disabled", true);
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
});


$("img").hover(function() {
    $(this).css('cursor','pointer');
});


/**
 * @return {boolean}
 */
function Victoire(){
    let compteur=0;
    for (let i=1; i<=9; i++){
        let id = $("#image"+i).attr("id");
        let src= $("#image"+i).attr("src");
        if (retnum(id)===retnum(src)){
            compteur++;
        }
    }
    return compteur === 9;
}


function retnum(str) {
    var num = str.replace(/[^0-9]/g, '');
    return parseInt(num,10);
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