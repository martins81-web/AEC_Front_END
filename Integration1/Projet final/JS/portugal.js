

$( "#hamb" ).click(function() {
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


function playAudio(url) {
        new Audio(url).play();
}