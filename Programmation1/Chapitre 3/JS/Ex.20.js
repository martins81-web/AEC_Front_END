// Eric Martins  - 12 décembre 2019
// Afficher 10 8 6 4 2 0 sur 12 lignes

var i,j;

for ( i = 0 ; i < 12 ; i++)
{
    for ( j = 10 ; j >= 0 ; j--)
    {
        if ( j%2 === 0)
        {
            document.write(j+" ");
        }
    }
    document.write("<br>");
}