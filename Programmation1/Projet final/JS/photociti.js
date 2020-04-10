// <!-- photociti.js -->*/
// <!-- Programmation1 -->*/
// <!-- Projet final par Eric Martins -->*/
// <!-- Crée le 26 mars 2020 -->*/
// <!-- Dernier mise à jour le 04 avril 2020 -->



// <!-- Déclaration de variables -->
var etape=1;
var fondClique='bleu';//options iniciales de fond: blanc, bleu, bleuFonce, gris, noir, rose, rouge
var mot='jquery';
var counter=0;
var photoClique;
var click=false;
var carouselClique=false;
// <!-- Fin de la déclaration de variables -->



// <!-- On click navigation -->
$( "#flecheDroite" ).on('click', function() {
    etape++;    //incremente la variable étape
    changeEtape(); //appel de la fonction changeEtape qui va changer le visuel selon létape
    counter=0;  //variable utiliser pour l'animation de chaque étapae
    $('#etape'+etape).text(""); //Fait un reset du text a animé
    AnimationEtape ();  ////appel de la fonction qui genere l'animation du mot "Étape x"
    document.getSelection().removeAllRanges(); //unselect all
});

$( "#flecheGauche" ).on('click', function() {
    etape--;
    changeEtape();
    counter=0;
    $('#etape'+etape).text("");
    AnimationEtape ();
    document.getSelection().removeAllRanges();
});
// <!-- Fin navigation -->


// <!-- Init -->
$( window ).on( "load", function() {
    $(".imgBG").css("background-image", "url(background/"+fondClique+".jpg)");  // image/color de fond
    $("#"+fondClique).removeClass('borderBlack').addClass('borderBlue'); //met une bordure bleu (par défault) au tour de l'image de fond selectionné dans l'étape3
    AnimationEtape(); ////appel de la fonction qui genere l'animation du mot "Étape 1"
});
// <!-- Fin init-->



// <!-- Étape1 -->
$( "#buttonGO" ).on('click', function() {
    mot = $("#motInput").val();

    EnleveAccents();
    if (Validation()) {
        $("#mot").empty();
        creationPhotociti();
        $("#mot").children().addClass('imgBG');
        // $("#flecheDroite").click();
    }
});

// Enter
$('#motInput').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $("#buttonGO").click();
    }
});
// <!-- Fin Étape1 -->


// <!-- Étape2 -->
$(document).on('click', ".photoMot", function(){
    photoClique=$(this);
    carouselClique=false;
    if(etape===2) {
        click=true;
        photoClique.children().addClass('borderBlue').removeClass('borderWhite');
        $('#modal').modal('show');
        CreateCarrousel();
    }
});

$(document).on('click', ".picCarousel", function(){
    for(let i=1 ; i<=5; i++){
        $("#pic"+i).removeClass('borderBlue');
    }
    $(".slides").children().addClass('borderBlack');
    $(this).addClass('borderBlue').removeClass("borderBlack");
    srcCarousel=$(this).attr("src");
    carouselClique=true;
});

$( "#save" ).on('click', function() {
    if (carouselClique){
        photoClique.children().attr("src",srcCarousel);
    }
    photoClique.children().addClass('borderBlack').removeClass('borderBlue');
    click=false;
});

$('#modal').on('hidden.bs.modal', function () {
        photoClique.children().addClass('borderWhite').removeClass('borderBlue');
        $(".slides").children().removeClass('borderBlue');
        click=false;
});

//Enter to save photo
$('#modal').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $("#save").click();
    }
});
// <!-- Fin Étape2 -->


// <!-- Étape3 -->
$(".imgFond").on('click', function() {
    fondClique=$(this).attr('id');
    $(".imgBG").css("background-image", "url(background/"+fondClique+".jpg)");
    if (fondClique==='blanc'){
        $("#ModalPhotosCarroussel").removeClass("text-white");
    } else {
        $("#ModalPhotosCarroussel").addClass("text-white");
    }
    $(this).removeClass('borderBlack').addClass('borderBlue');
    $(this).siblings().removeClass('borderBlue').addClass('borderBlack');
});

$("#print").on('click', function() {
    window.print();
});
// <!-- Fin Étape3 -->




// <!-- mouse hover functions -->
$(document).on('mouseenter', '#mot .img-fluid', function(e) {
    if(etape===2) {
        $(this).css('cursor', 'pointer');
        $(this).removeClass('borderWhite').addClass('borderBlue');
    } else{
        $(this).css('cursor', 'default');
    }
});

$(document).on('mouseleave', '#mot .img-fluid', function(e) {
    if(etape===2 && click===false) {
        $(this).removeClass('borderBlue').addClass('borderWhite');
    }
});

$('#modal').on('mouseenter', 'img', function() {
        $(this).css('cursor', 'pointer');
}).on('mouseleave', '#mot .img-fluid', function(e) {
        $(this).css('cursor', 'default');
});

$("#flecheGauche, #flecheDroite, .imgFond").hover(function () {
    $(this).css('cursor', 'pointer');
    $(this).children().addClass('red');
}).on("mouseout", function() {
    $(this).children().removeClass('red');
});

$("#print").hover(function () {
    $(this).css('cursor', 'pointer');
    $(this).children().addClass('red');
}).on("mouseout", function() {
    $(this).children().removeClass('red');
});
// <!-- Fin hover functions -->




// <!-- Fonctions -->

// <!-- Création de l'animation du texte "Étape x", chaque caractère aparait 100ms après l'anterieur -->
function AnimationEtape () {
    if(counter===0){
        $('#etape'+etape).text("É");
        counter++;
    }else if (counter===1) {
        $('#etape'+etape).text("Ét");
        counter++;
    }else if (counter===2){
        $('#etape'+etape).text("Éta");
        counter++;
    }else if (counter===3){
        $('#etape'+etape).text("Étap");
        counter++;
    }else if (counter===4){
        $('#etape'+etape).text("Étape");
        counter++;
    }else if (counter===5){
        $('#etape'+etape).text("Étape "+etape);
        clearTimeout(animeEtape);
        counter++;
    }

    if (counter<6){
        animeEtape = setTimeout(AnimationEtape, 100);
    } else{
        counter=0;
    }
}

// <!-- Changement d'etape / Affichage et options d'impression -->
function changeEtape(){
    if (etape===1){
        $("#flecheGauche").addClass("hide");
        $(".etape1").removeClass("hide");
        $(".etape2").addClass("hide");
        $(".etape3").addClass("hide");
        PrintZoneInitial();
    } else if (etape ===2){
        $("#flecheGauche").removeClass("hide");
        $("#flecheDroite").removeClass("hide");
        $(".etape1").addClass("hide");
        $(".etape2").removeClass("hide");
        $(".etape3").addClass("hide");
        $("#debut").addClass("hide");
        PrintZoneInitial();
    }
    else if (etape ===3){
        $("#flecheDroite").addClass("hide");
        $(".etape1").addClass("hide");
        $(".etape2").addClass("hide");
        $(".etape3").removeClass("hide");
        SelectPrintZoneFinal();
    }
}
// <!-- Fin du Changement d'etape - Affichage et options d'impression -->


// <!-- Fonction des zones a imprimer-->
//étape 3 - imprime juste la section du mot ou montage
function SelectPrintZoneFinal() {
    $("header").addClass('d-print-none');
    $("#etapes").addClass('d-print-none');
}

//reset des zones
function PrintZoneInitial() {
    $("header").removeClass('d-print-none');
    $("#etapes").removeClass('d-print-none');
}
// <!-- Fin des zones a imprimer-->



// <!-- Validation du mot selon les contraints-->
function Validation(){
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

    if (mot.length>0 && mot.length<3){
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

    if (mot===""){
        motinvalide=false;
    }
    return motinvalide && longueurValide;
}
// <!-- Fin de la Validation-->


// <!-- Enlève les accents -->
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
// <!-- Fin de la fonction qui enlève les accents -->

// <!-- Fonction qui crie et fait les appends des chacunes des images du mots -->
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
    $('#mot').children().css("background-image", "url(background/"+fondClique+".jpg)");
}
// <!-- Fin de la fonction qui crie et fait les appends des chacunes des images du mots -->

// <!-- Creation du Carousel pour changer d'images -->
function CreateCarrousel() {
    let index;
    if(photoClique.attr("id")==="*"){
        photoClique.attr("id","CS");
    }else {
        photoClique.attr("id").toUpperCase();
    }

    for(let i=1 ; i<=5; i++){
        $("#pic"+i).attr("src","Letters/"+photoClique.attr("id").toUpperCase()+"/"+photoClique.attr("id").toUpperCase()+i+".jpg");
        if ($("#pic"+i).attr("src")===photoClique.children().attr("src")){
            $(".slides").children().addClass('borderBlack');
            $("#pic"+i).addClass('borderBlue').removeClass("borderBlack");
        }
    }

}
// <!-- Fin de la fonction de creation du Carousel pour changer d'images -->


// <!-- Fin des fonctions -->