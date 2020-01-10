// Eric Martins - 12 décembre 2019
//Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.

var i;
var j=0;

for ( i = 1 ; i <= 49 ; i++ )
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
}