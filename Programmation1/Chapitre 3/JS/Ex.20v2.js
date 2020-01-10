// Eric Martins  - 17 décembre 2019
// Afficher 10 8 6 4 2 0 sur 12 lignes

var i=0,j;

while ( i < 12 )
{
    j=10;
    while ( j >= 0 )
    {
        document.write(j+" ");
        j-=2;
    }
    document.write("<br>");

    i++;
}