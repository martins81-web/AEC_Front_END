

var etape=1;

$( "#flecheDroite" ).on('click', function() {
   etape++;
   changeEtape();
});

$( "#flecheGauche" ).on('click', function() {
   etape--;
    changeEtape();
});

function changeEtape(){
    if (etape===1){
        $("#flecheGauche").addClass("hide");
        $(".etape1").removeClass("hide");
        $(".etape2").addClass("hide");
        $(".etape3").addClass("hide");
    } else if (etape ===2){
        $("#flecheGauche").removeClass("hide");
        $("#flecheDroite").removeClass("hide");
        $(".etape1").addClass("hide");
        $(".etape2").removeClass("hide");
        $(".etape3").addClass("hide");
    }
    else if (etape ===3){
        $("#flecheDroite").addClass("hide");
        $(".etape1").addClass("hide");
        $(".etape2").addClass("hide");
        $(".etape3").removeClass("hide");
    }
}
