
var premierClique=true;

$( ".custom-toggler" ).click(function() {
    if (premierClique===true) {
        $(".custom-toggler").addClass("rotated");
        premierClique=false;
    }
    else{
        $(".custom-toggler").removeClass("rotated");
        premierClique=true;
    }
});