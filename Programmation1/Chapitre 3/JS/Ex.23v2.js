// Eric Martins - 17 décembre 2019
//Créez un programme qui lit un nombre et affiche tous les chiffres de ce nombre séparément dans les deux sens.
//
// indice : lisez le nombre en string.
// var nb = “Shany”;
// nb[0] vaut la lettre S
// nb[2] vaut la lettre a
//
// Exemple :
// 123 =
// 1
// 2
// 3
// -------
// 3
// 2
// 1

var nb;
var i=0,
    nb=prompt( " Entrez un nombre");

while (  i<nb.length )
{
    document.write(nb[i]+"<br>");
    i++;
}
i--;

document.write("-------<br>");

while ( i >= 0 )
{
    document.write(nb[i]+"<br>");
    i--;
}
