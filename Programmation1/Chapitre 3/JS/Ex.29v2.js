//Eric Martins - 17 décembre 2019
//Ecrire un programme qui demande à l'utilisateur de saisir un entier N et qui affiche la figure suivante.
//         N=1
//         *
//         N=2
//         **
//         N=3
//         ***
//         .......

var entier;
var i=1;
var j;

entier=Number(prompt ("Entrez un nombre"));

while ( entier > 0 )
{
    document.write("N=" + i + "<br>");
    j=0;
    while ( j < i )
    {
        document.write("*");
        j++;
    }
    document.write("<br>");
    i++;
    entier--;
}