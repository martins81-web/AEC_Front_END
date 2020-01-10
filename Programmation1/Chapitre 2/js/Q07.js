// Eric Martins - 14 novembre 2019
//7.    Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

//déclaration des variables
var nb;

//lecture des variables
nb=Number(prompt("Entrez un nombre"));

//if pour vérifier la catégorie du nombre
if( 0 === nb )
        document.write("Zéro");
    else if ( nb < 0 )
        document.write("Négatif");
    else
        document.write("Positif");
