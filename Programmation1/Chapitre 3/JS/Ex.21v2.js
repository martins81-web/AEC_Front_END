// Eric Martins  - 17 décembre 2019
// Afficher 1 3 5 7 9 11 sur 13 lignes

var i=0,j;

while ( i < 13 )
{
    j=1;

    while ( j <= 11 )
    {
        document.write(j+" ");
        j+=2;
    }
    document.write("<br>");
    i++;
}