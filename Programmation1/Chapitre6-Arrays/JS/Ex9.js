// Eric Martins - 09 janvier 2020
// Lire 10 nombres quelconques et les placer dans un tableau
// Par la suite, trouver le plus petit et le plus grand de ces nombres

var nombres = new Array();
var plusGrand;
var plusPetit;
var i;

for ( i=0 ; i<10 ; i++)
{
    nombres[i] = Number (prompt("Entrez un nombre"));
    document.write(nombres[i]+"<br>");

    if(i===0)
    {
        plusPetit = nombres[0];
        plusGrand = nombres[0];
    }

    if (nombres[i] > plusGrand) {
        plusGrand = nombres[i];
    }
    else if(nombres[i] < plusPetit) {
        plusPetit = nombres[i];
    }
}



document.write("Plus petit:"+plusPetit+"<br>");
document.write("Plus grand:"+plusGrand+"<br>");

