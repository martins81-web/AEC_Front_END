

$( ".navbar-toggler" ).click(function() {
        $("#arrowHamb").toggleClass("rotated");
});



$(document).on('mouseenter', '#btnPhotos', function(e) {
        $(this).css('background-color', "white");
        $(this).css('color', '#050043');
        $(this).css('border', '1px solid black');
});

$(document).on('mouseleave', '#btnPhotos', function(e) {
        $(this).css('color', 'white');
        $(this).css('background-color', "#050043");
});



var himne = new Audio();
himne.src = "https://upload.wikimedia.org/wikipedia/commons/5/58/A_Portuguesa.ogg";

var click=true;
$(document).on('click', "#drapeauHeader, #drapeauFooter", function(){
        if (click===true){
                PlaySound();
                click=false;

        } else {
                PauseSound();
                click=true;
        }
});

function PlaySound() {
        himne.play();
}

function PauseSound() {
        himne.pause();
}

