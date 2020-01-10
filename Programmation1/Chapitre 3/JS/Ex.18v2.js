// Eric Martins - 16 décembre 2019
// Faites afficher 1 2 3 4 5 6 7 8 9 10 sur 10 lignes

var i=1;

while ( i <= 10 )
{
    var j=1;
    while ( j <= 10 )
    {
        document.write(j+ " ");
        j++;
    }
    document.write("<br>");
    i++;
}