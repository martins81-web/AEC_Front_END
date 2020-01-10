//Eric Martins - 12 décembre 2019
//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
//
// Exemple :
// 153 = = 1^3 + 5^3 + 3^3 = 1 + 125 + 27, est un nombre de Armstrong.

var nombre;
var j;
var somme = 0;
var string;
var nb;

document.write("Les nombres de Armstrong de moins de 1000 sont:" + "<br>");

for( nombre = 0 ; nombre<1000 ; nombre++)
{
string = nombre.toString();

    for (j=0 ; j < string.length ; j++)
    {
        nb = parseInt(string[j]);
        somme = somme + Math.pow(nb,3);
    }

    if ( nombre === somme)
   {
        document.write(nombre+"<br>");
   }
somme=0;
}