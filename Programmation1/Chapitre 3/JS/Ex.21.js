// Eric Martins  - 12 décembre 2019
// Afficher 1 3 5 7 9 11 sur 13 lignes

var i,j;

for ( i = 0 ; i < 13 ; i++)
{
    for ( j = 0 ; j <= 11 ; j++)
    {
        if ( j%2 === 1)
        {
            document.write(j+" ");
        }
    }
    document.write("<br>");
}