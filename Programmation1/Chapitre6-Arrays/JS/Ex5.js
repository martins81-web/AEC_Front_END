// Eric Martins - 09 janvier 2020
// Modifiez le numéro précédent pour trouver le plus grand nombre possible en JavaScript.

var PlusGrand;
var nombre;
var i;


for ( i = 0 ; ; i++ )
{
    nombre= Math.pow(2,i);

    if (nombre === Infinity)
    {
        break;
    }

    PlusGrand = nombre;
}

document.write("Le plus grand nombre en javascript est: "+"2^"+i+" = "+PlusGrand+ "<br>");