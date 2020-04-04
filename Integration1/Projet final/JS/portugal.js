<!-- portugal.js -->
<!-- Projet final d'Integration1 par Eric Martins -->
<!-- Crée le 12 mars 2020 -->
<!-- Dernier mise à jour le 04 avril 2020 -->

/* fait la rotation de l'image de l'hamburguer custom toggler dans le navbar */
$( ".navbar-toggler" ).click(function() {
        $("#arrowHamb").toggleClass("rotated");
});


/* Change la couleur du bouton en passand le souris dessus*/
/* bouton premier page section 2*/
$(document).on('mouseenter', '#btnPhotos', function(e) {
        $(this).css('background-color', "white");
        $(this).css('color', '#050043');
        $(this).css('border', '1px solid black');
});

$(document).on('mouseleave', '#btnPhotos', function(e) {
        $(this).css('color', 'white');
        $(this).css('background-color', "#050043");
});


/*Musique en cliquant sur les drapeaux - EASTER EGG*/
var himne = new Audio();
himne.src = "https://upload.wikimedia.org/wikipedia/commons/5/58/A_Portuguesa.ogg";

var click=true;
$(document).on('click', "#drapeauHeader, #drapeauFooter", function(e){
        if (click===true){
                himne.play();
                click=false;

        } else {
                himne.pause();
                click=true;
        }
});




