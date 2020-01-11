//Eric Martins - 10 janvier 2020
// Lire 12 nombres quelconques et les mettre dans un tableau.
// Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15. Si tel est le cas, afficher ces 2 nombres.

var tab = [];
var i;

for ( i=0 ; i<12 ; i++){
    tab[i] = Number(prompt("Entrez un nombre:"));
}

for ( i=0 ; i<tab.length-1 ; i++){
    if( tab[tab.length-1]+tab[i] === 15 ){
        document.write( tab[i] + " ---- " + tab[tab.length-1] + "<br>");
    }
}