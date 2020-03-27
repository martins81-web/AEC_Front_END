// $('#nom').append("<div class='col-1'><img src='Letters/E/E3.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/R/R5.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/I/I2.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/C/C2.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='offset-1 col-1'><img src='Letters/M/M3.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/A/A3.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/R/R5.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/T/T3.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/I/I2.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/N/N4.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");
// $('#nom').append("<div class='col-1'><img src='Letters/S/S1.jpg' class='img-fluid borderBlack' alt='Responsive image\'></div>");

var etape=1;

$( "#flecheDroite" ).on('click', function() {
   etape++;
   changeEtape();
   document.getSelection().removeAllRanges();
});

$( "#flecheGauche" ).on('click', function() {
   etape--;
   changeEtape();
   document.getSelection().removeAllRanges();
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
        $("#debut").addClass("hide");
    }
    else if (etape ===3){
        $("#flecheDroite").addClass("hide");
        $(".etape1").addClass("hide");
        $(".etape2").addClass("hide");
        $(".etape3").removeClass("hide");
    }
}

var mot='jquery';

$( "#buttonGO" ).on('click', function() {
    mot = $("#motInput").val();

    EnleveAccents();
    if (Verification()) {
        $("#mot").empty();
        creationPhotociti();
        $("#mot").children().addClass('imgBG');
        $("#flecheDroite").click();
    }
});

$('#motInput').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $( "#buttonGO" ).click();
    }
});


function Verification(){
    let longueurValide=false;
    let motinvalide=false;

    for( let i=0; i<mot.length; i++) {
        if( !((mot[i]>='a' && mot[i] <= 'z') || (mot[i]>='A' && mot[i] <= 'Z') || (mot[i]==='*'))){
            motinvalide=true;
        }
    }

    if (motinvalide){
        $("#invalide").text("Votre mot doit contenir uniquement des lettres de l'alphabet ou * pour les caractères speciaux");
        $("#invalide").addClass('red').removeClass('hide');
        motinvalide=false;
    } else{
        $("#invalide").addClass('hide');
        motinvalide=true;
    }

    if (mot.length<3 && mot.length>0){
        $("#erreur").text("Mot trop court");
        $("#erreur").addClass('red').removeClass('hide');
        longueurValide=false;
    } else if (mot.length>12){
        $("#erreur").text("Mot trop long");
        $("#erreur").addClass('red').removeClass('hide');
        longueurValide=false;
    } else{
        $("#erreur").addClass('hide');
        longueurValide=true;
    }
    return motinvalide && longueurValide;
}

function EnleveAccents(){
    let tabMot=[];
    for( let i=0; i<mot.length; i++){
        tabMot[i]=mot[i];
    }

    for( let i=0; i<tabMot.length; i++){
        if (tabMot[i]==='é' || tabMot[i]==='è'|| tabMot[i]==='ê'|| tabMot[i]==='ë'){
            tabMot[i]='e';
        }
        if (tabMot[i]==='à'){
            tabMot[i]='a';
        }
        if (tabMot[i]==='ù'){
            tabMot[i]='u';
        }
    }
    mot=tabMot.join("");
}


function creationPhotociti(){
   let col="";

   if (mot.length===3){
       col='col-4';
   } else if (mot.length===4){
       col='col-3';
   } else if (mot.length===5 || mot.length===6){
       col='col-2';
   } else if (mot.length>6 && mot.length<=12){
       col='col-1';
   }

   for(let i=0; i<mot.length ; i++){
       var random = Math.floor(Math.random() * 5) + 1;
       if( (mot[i]>='a' && mot[i] <= 'z') || (mot[i]>='A' && mot[i] <= 'Z')){
           $('#mot').append("<div id='"+mot[i]+"' class='p-3 photoMot  "+col+"'><img src='Letters/"+mot[i].toUpperCase()+"/"+mot[i].toUpperCase()+random+".jpg' class='img-fluid borderWhite' alt='Responsive image\'></div>");
       } else if(mot[i]==='*'){
           $('#mot').append("<div id='"+mot[i]+"' class='p-3 photoMot  "+col+"'><img src='Letters/CS/CS"+random+".jpg' class='img-fluid borderWhite' alt='Responsive image\'></div>");
       }
   }
}

var photoClique;
$(document).on('click', ".photoMot", function(){
    photoClique=$(this);

    if(etape===2) {
        $('#modal').modal('show');
        CreateCarrousel();
    }
});

function CreateCarrousel() {
    if(photoClique.attr("id")==="*"){
        photoClique.attr("id","CS");
    }else {
        photoClique.attr("id").toUpperCase();
    }

    for(let i=1 ; i<=5; i++){
        $("#pic"+i).attr("src","Letters/"+photoClique.attr("id")+"/"+photoClique.attr("id")+i+".jpg");

        if (photoClique.children().attr("src")===$("#pic"+i).attr("src")){
            for(let j=1 ; j<=5; j++){
                $("#pic"+j).removeClass('borderRed');
            }
            $("#pic"+i).addClass('borderRed');
        }
    }
}

var fondClique;
$(".imgFond").on('click', function() {
    fondClique=$(this).attr('id');
    $("#mot").children().addClass('imgBG');
    $(".imgBG").css("background-image", "url(background/"+fondClique+".jpg)");
    $(this).removeClass('borderBlack').addClass('borderRed');
    $(this).siblings().removeClass('borderRed').addClass('borderBlack');
});

var srcCarousel;
$(document).on('click', ".picCarousel", function(){
    for(let i=1 ; i<=5; i++){
        $("#pic"+i).removeClass('borderRed');
    }
    $(this).addClass('borderRed');
    srcCarousel=$(this).attr("src");
});

$( "#save" ).on('click', function() {
    photoClique.children().attr("src",srcCarousel);
});