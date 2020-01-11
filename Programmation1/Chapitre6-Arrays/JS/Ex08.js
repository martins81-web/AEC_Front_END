// Eric Martins - 09 janvier 2020
// Lire les noms et notes d’examen d’une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

var noms = [];
var notes = [];
var i;
var total=0;

for ( i=0 ; i<5 ; i++ )
{
    noms[i] = prompt("Entrez le nom de l'élève:");
    notes[i] = Number (prompt("Entrez la note (0-100) pour l'élève: "));
    total+=notes[i];
}

//Calcul moyenne
var moyenne=total/5;

//Affichage
for( i=0 ; i<5 ; i++ )
{
    if (notes[i]>moyenne)
    {
        document.write(noms[i]+": "+ notes[i]);
    }
}