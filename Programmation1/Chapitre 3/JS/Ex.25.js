//Eric Martins - 12 décembre 2019
// Trouvez les nombres parfaits
// On souhaite écrire un programme qui calcule les n premiers nombres parfaits. Un nombre est dit parfait s’il est égal à la somme de ses
// diviseurs, 1 compris.
//
// Exemple : 6 = 1+2+3 , est un nombre parfait.

var i,j;
var compteur = 1;
var somme = 0;

for ( i = 1 ; compteur<=4; i++)   // juste les premiers 4 nombre parfaits, ça devient trop lours e ça gele après
{
    for ( j=0 ; j<i ; j++ )  //for qui détermine les diviseurs et fait leur somme
    {
        if ( i%j === 0 )
        {
            somme +=j;
            //document.write(j + "est diviseurs de " + i + "<br>");
        }
    }

    if ( i === somme)  // compare le nombre avec la somme de ses diviseurs
    {
        compteur++;
        document.write(i+"<br>");
    }
    somme=0;
}

