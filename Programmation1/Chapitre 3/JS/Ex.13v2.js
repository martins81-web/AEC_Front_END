// Eric Martins - 13 décembre 2019
//Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.

var i=1;
var j=0;

while (i <= 49 )
{
    if ( i%2 === 1)
    {
        document.write(i + " ");
        j++;
    }

    if( j === 5 )
    {
        document.write("<br>");
        j=0;
    }
    i++;
}