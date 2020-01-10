// Eric Martins  - 12 décembre 2019
// Afficher 2 4 6 8 10 sur 30 lignes

var i,j;

for ( i = 0 ; i < 30 ; i++)
{
    for ( j = 1 ; j <= 10 ; j++)
    {
        if ( j%2 === 0)
        {
            document.write(j+" ");
        }
    }
    document.write("<br>");
}