// Eric Martins - 14 novembre 2019
//15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

//déclaration des variables
var largeur, longueur, perimetre, surface;

//lecture des variables
largeur=Number(prompt("Entrez la largeur du rectangle"));
longueur=Number(prompt("Entrez la longueur du rectangle"));

//Calcule de la surface et du perimetre
perimetre = 2 * largeur + 2 * longueur;

if ( perimetre >= 100 )
{
    surface = largeur * longueur;
    document.write(surface);
}

