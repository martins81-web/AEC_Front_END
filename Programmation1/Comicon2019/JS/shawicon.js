

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function hasNumber(str) {
    return (/[0-9]/.test(str));
}


//faire aparaitre les sections selon le choix
var image="";
var radioValide=false;
$('#radio').change(function(){
    $('#validationRadio').addClass('hide');
    var radioSelectionne = $("input[type='radio']:checked").parent().text();
    radioValide=true;
    if (radioSelectionne==='Starwars'){
        $('#sectionStarwars').siblings().hide();
        $('#sectionStarwars').show();
        $('.image').attr("src", "img/Yoda.png");
        personage='Yoda';
    }else if(radioSelectionne==='Marvel'){
        $('#sectionMarvel').siblings().hide();
        $('#sectionMarvel').show();
        $('.image').attr("src", "img/Spiderman.png");
        personage='Spiderman';
    }else if(radioSelectionne==='DC'){
        $('#sectionDC').siblings().hide();
        $('#sectionDC').show();
        $('.image').attr("src", "img/Batman.png");
        personage='Batman';
    }
});



//Validation du nom
var nomValide=false;
var nom;
$( "#formNom" ).keyup(function() {
    nom = $("#nom").val();
    nom=nom.trim();
    if(nom === ""){
        $('#validationNom').addClass('hide');
        nomValide=false;
    } else{
        if(nom==="SLAY" || nom==="Test"){
            $('#validationNom').removeClass('hide').removeClass('green').addClass('red').text("Usager non disponible");
            nomValide=false;
        }
        else{
            $('#validationNom').removeClass('hide').removeClass('red').addClass('green').text("Valide");
            nomValide=true;
        }
    }
});


//Validation du mot de pass
var motDePassValide=false;
var pass;
$( "#formMotDePasse" ).keyup(function() {
    pass = $("#MotDePass").val();
    var nombreCaracteres=0;

    for (let i=0; i<pass.length; i++){
        nombreCaracteres++;
        if (nombreCaracteres>0){
            motDePassValide=true;
        }
    }
    var passForte= hasUpperCase(pass) && hasNumber(pass);

    if(pass === ""){
        $('#validationPass').addClass('hide');
    } else if (nombreCaracteres<6){
        $('#validationPass').removeClass('hide green yellow').addClass('red').text('Faible');
    } else if ( (nombreCaracteres>=6 && nombreCaracteres<=9) || (nombreCaracteres>9 && !passForte) ){
        $('#validationPass').removeClass('hide green red').addClass('yellow').text('Moyen');
    } else if (nombreCaracteres>9 && passForte){
        $('#validationPass').removeClass('hide yellow red').addClass('green').text('Fort');
    }
});


//Comparaison des mots de pass
var motDePass2Valide=false;
$( "#formMotDePasse2" ).keyup(function() {
    let pass2 = $("#ConfirmationMotDePass").val();
    let pass = $("#MotDePass").val();

    if(pass2 === ""){
        $('#motDePassEgale').addClass('hide');
        motDePass2Valide=false;
    }
    else if (pass2 !== pass) {
        $('#motDePassEgale').removeClass('hide green').addClass('red').text('Mots de passe différents');
        motDePass2Valide=false;
    }
    else if (pass2 === pass) {
        $('#motDePassEgale').removeClass('hide red').addClass('green').text('Mots de passe identiques ');
        motDePass2Valide=true;
    }
});


//validation courriel
var courrielValide=false;
var email;
$( "#formCourriel" ).keyup(function() {

    email = $("#email").val();
    var arroba=false;
    var point=false;

    for (let i=0; i<email.length;i++){
        if (email[i]==='@'){
            arroba=true;
        }
        if (email[i]==='.'){
            point=true;
        }
    }

    if(email === "") {
        $('#validationCourriel').addClass('hide');
        courrielValide=false;
    } else if(!arroba || !point){
        $('#validationCourriel').removeClass('hide green').addClass('red').text('Courriel invalide');
        courrielValide=false;
    } else if(arroba && point){
        $('#validationCourriel').removeClass('hide red').addClass('green').text('Courriel valide');
        courrielValide=true;
    }
});




//changer image selon le choix de la liste déroulante
var personage;
$("select").change(function(){
    personage= $(this).children("option:selected").text();
    $('.image').attr("src", "img/"+personage+".png");
});




$("#envoyer").click(function(){
    if(nomValide && motDePassValide && courrielValide && motDePass2Valide && radioValide){
        $('form').hide();
        $('.submitForm').show();
        image=$('.image').attr('src');
        $('.personnageChoisi').attr("src", image);
        $('.personnage').text(personage);
        $('.nom').text(nom);
        $('.mail').text(email);
    }else{
        if(!nomValide){
            $('#nom').addClass('pholder');
        }
        if(!motDePassValide){
            $('#MotDePass').addClass('pholder');
        }
        if(!motDePass2Valide){
            $('#ConfirmationMotDePass').addClass('pholder');
        }
        if(!courrielValide){
            $('#email').addClass('pholder');
        }
        if(!radioValide){
            $('#validationRadio').removeClass('hide').addClass('red').text("Choisissez une option");
        }
    }
});