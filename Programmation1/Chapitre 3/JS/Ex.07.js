// Eric Martins - 12 décembre 2019
//Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
// Comptez et affichez le nombre de mots entrés avant le mot patate.

//déclarations variables
var mot = "";
var i ;


//lecture du mot
for ( i= 0 ;; i++)
{
    mot=prompt("Ecrivez un mot:");
    if (mot === "patate")
    {
        break;
    }
}

//affichage
document.write( " Vous avez entré "+ i +" mots avant le mot " + mot + ".");

