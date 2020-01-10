// Eric Martins - 13 décembre 2019
//Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
// Comptez et affichez le nombre de mots entrés avant le mot patate.

//déclarations variables
var mot = " ";
var i=0 ;


//lecture du mot

while ( mot != "patate")
{
    mot=prompt("Ecrivez un mot:");
    i++;
}


//affichage
document.write( " Vous avez entré "+ (i-1) +" mot(s) avant le mot " + mot + ".");