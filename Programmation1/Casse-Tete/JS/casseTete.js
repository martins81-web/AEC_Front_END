
var imgClicke=false;
var imgID1;
var imgSrc2;

$('.img-fluid').on('click', function() {
    if (imgClicke===false) {
        imgID1 = $(this);
        imgClicke=true;
        imgID1.addClass('border border-danger');
    } else{
        imgSrc2 = $(this).attr('src');
        $(this).attr("src", imgID1.attr("src"));
        imgID1.attr("src", imgSrc2);
        imgClicke=false;
        imgID1.removeClass('border border-danger');
    }
});


$('#boutonRecommencer').click(function() {
    location.reload();
});

$('#boutonTricher').click(function() {
    for (let i=1; i<=9; i++){
        $("#image"+i).attr("src","images/"+i+".jpg");
    }
});