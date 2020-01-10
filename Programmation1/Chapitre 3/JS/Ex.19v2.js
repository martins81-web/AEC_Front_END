// Eric Martins  - 16 décembre 2019
// Afficher 2 4 6 8 10 sur 30 lignes

var i=1,j;

while ( i <= 30 )
{
    document.write(i+"-  ");

    j=2;
    while ( j <= 10 )
    {
            document.write(j+" ");
            j+=2;
    }

    document.write("<br>");
    i++;
}