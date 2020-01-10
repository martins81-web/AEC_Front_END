// Eric Martins - 13 décembre 2019
//Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

var i=1;

while ( i <= 10 )
{
    document.write(i+" Carré: " + Math.pow(i,2) + "  Cube: " + Math.pow(i,3)+"<br>");
    i++
}

