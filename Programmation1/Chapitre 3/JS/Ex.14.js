// Eric Martins - 12 décembre 2019
//Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.

var nb;
var sommePositifs=0;
var sommeNegatifs=0;
var i;


for ( i = 0 ; ; i++ )
{
       nb=Number(prompt("Entrez un nombre:"));

       if ( nb === 0)
       {
           break;
       }
       else if ( nb < 0 )
       {
           sommeNegatifs += nb;
       }
       else if ( nb > 0 )
       {
           sommePositifs += nb;
       }
}

document.write("Somme des nombres positifs = " + sommePositifs );
document.write("<br>");
document.write("Somme des nombres negatifs = " + sommeNegatifs );
