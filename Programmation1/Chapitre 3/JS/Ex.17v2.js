// Eric Martins - 16 décembre 2019
//Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin).
// Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F. De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.


var compteurMasculin = 0;
var compteurFeminin = 0;
var genre = 'M';

while ( genre === 'M' || genre === 'F'  )
{
    genre = prompt ("Entrez le genre, M pour masculin, F pour feminin");
    genre = genre.toUpperCase(); // permet d'entrer en majuscule ou minuscules

    if (genre === 'M')
    {
        compteurMasculin++;
        document.write("Masculin<br>");
    }
    else if (genre === 'F')
    {
        compteurFeminin++;
        document.write("Feminin<br>");
    }
    else
    {
        document.write("<br>");
        document.write("************************************************************<br>");
        document.write("Vous avez entré autre chose que M ou F. Le programme est donc terminé.<br>");
        document.write("************************************************************<br>");
    }
}
document.write("<br>");
document.write("<b>Nombre de F: </b>" + compteurFeminin );
document.write("<br>");
document.write("<b>Nombre de M: </b>" + compteurMasculin );