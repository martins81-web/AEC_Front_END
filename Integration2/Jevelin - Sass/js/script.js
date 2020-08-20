
$(".categories p").addClass('hover ');

$(".categories p").on('click', function() {
    $(this).addClass('selected-bg selected-category');
    $(this).siblings().removeClass('selected-bg selected-category');
});

$(document).on('mouseenter','.categories p', function(){
    if(!$(this).hasClass('selected-category'))
        $(this).addClass('selected-bg');
}).on('mouseleave','.categories p', function(){
    if(!$(this).hasClass('selected-category'))
        $(this).removeClass('selected-bg');
});


//affichage du nombre de commentaires selon l'article
//**************************************
var nb_comments=0;
$("#nbComments").text(nb_comments);
$("#nbComments2").text(nb_comments);
$("#nbComments3").text(nb_comments);
$("#nbComments4").text(nb_comments);
//**************************************

$(document).on('mouseenter','.comment', function(){
        $(this).addClass('hover-comments-icon hover');
}).on('mouseleave','.comment', function(){
        $(this).removeClass('hover-comments-icon hover');
});

$(document).on('mouseenter','.card-carousel', function(){
    $('.card-carousel .carousel-control-prev').removeClass('hidden');
    $('.card-carousel .carousel-control-next').removeClass('hidden');
    $('.card-carousel .carousel-indicators').removeClass('hidden');
}).on('mouseleave','.card-carousel', function(){
    $('.card-carousel .carousel-control-prev').addClass('hidden');
    $('.card-carousel .carousel-control-next').addClass('hidden');
    $('.card-carousel .carousel-indicators').addClass('hidden');
});


