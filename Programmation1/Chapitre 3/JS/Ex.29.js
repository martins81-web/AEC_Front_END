//Eric Martins - 12 décembre 2019
//Ecrire un programme qui demande à l'utilisateur de saisir un entier N et qui affiche la figure suivante.
//         N=1
//         *
//         N=2
//         **
//         N=3
//         ***
//         .......

var entier;
var i;
var j;

entier=Number(prompt ("Entrez un nombre"));

for ( i = 1 ; entier>0; entier--, i++)
{
    document.write("N=" + i + "<br>");
    for (j=0; j<i; j++)
    {
        document.write("*");
    }
    document.write("<br>");
}