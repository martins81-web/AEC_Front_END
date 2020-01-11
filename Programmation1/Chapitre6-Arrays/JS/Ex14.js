//Eric Martins - 10 janvier 2020
// Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15.
// Si tel est le cas, affichez ces deux nombres.

var tab = [];
var i,j;

for ( i=0 ; i<12 ; i++){
    tab[i] = Number(prompt("Entrez un nombre:"));
}

document.write( tab + "<br>");

for (i=0 ; i<12 ; i++){
    for (j=0 ; j<12 ; j++){
            if ((tab[i]+tab[j]) === 15){
                document.write( tab[i] + " ---- " + tab[j] + "<br>");
            }
    }
}