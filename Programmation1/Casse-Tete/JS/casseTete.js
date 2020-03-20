
var imgClicke=false;
var $img1;
var $img2;
var $imgSrc1;
var $imgSrc2;

$('.img-fluid').on('click', function() {
    if (imgClicke===false) {
        $img1 = $(this);
        $imgSrc1 = $(this).attr('src');
        $img1.addClass('border border-danger');
        imgClicke=true;
    } else{
        $img2 = $(this);
        $imgSrc2 = $(this).attr('src');
        $img2.attr("src", $imgSrc1);
        $img1.attr("src", $imgSrc2);
        $img1.removeClass('border border-danger');
        imgClicke=false;
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