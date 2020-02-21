/*<!-- Q1.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Exercices jQuery par Eric Martins -->*/
/*<!-- Crée le 20 février 2020 -->*/

// Méthode Attr

// Ajoutez le title suivant à l’image de stormtrooper dont le id est stormBlanc “Pas facile la vie de Stormtrooper”.
// À la même image, ajoutez l’attribut alt pour “image d’un stormtrooper blanc”.
// Changez cette image pour nouveauStorm.jpeg
// À la ligne 79, changez le font-awesome (sa classe) pour "fas fa-fighter-jet"


$('#stormBlanc').attr("title" , "Pas facile la vie de Stormtrooper");
$('#stormBlanc').attr("alt" , "image d’un stormtrooper blanc");
$('#stormBlanc').attr("src" , "images/nouveauStorm.jpeg");
$('#fontAChanger').attr("class", "fas fa-fighter-jet");


// Méthode css
//
//     Changez le dimension du texte .row4 h1 pour 4rem.
//     Changez l’opacité de la classe orange pour .8.
//     Changez la couleur de fond de la classe fondNoir pour un gris foncé.
//     Changez la couleur de fond de la classe fondBlanc pour un gris pâle.

$('.row4 h1').css("font-size", "4rem");
$('.orange').css("opacity", ".8");
$('.fondNoir').css("background-color", "darkgrey");
$('.fondBlanc').css("background-color", "dimgray");

// Méthode html et hide()
//
// Changez le titre Starwars Stormtrooper pour “Vive les Stormtroopers”
// Changez tout le texte sous Darth Vader pour  uniquement “Père de Luke Skywalker”
// Cacher  une section de votre choix.
//

$('#titre').html("Vive les Stormtroopers");
$('#texte').html("Père de Luke Skywalker");
$('.parallax2').hide();